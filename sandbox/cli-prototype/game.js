const readline = require('readline');

// ============================================================================
// GAME STATE
// ============================================================================

const gameState = {
  round: 0,
  agents: [
    {
      id: 'player',
      name: 'Player',
      type: 'player',
      resources: 0,
      connectedNodes: ['a']
    },
    {
      id: 'cooperative',
      name: 'Cooperative',
      type: 'cooperative',
      resources: 0,
      connectedNodes: ['b']
    },
    {
      id: 'competitive',
      name: 'Competitive',
      type: 'competitive',
      resources: 0,
      connectedNodes: ['c']
    }
  ],
  nodes: [
    {
      id: 'a',
      name: 'Alpha',
      resourcePool: 0,
      connectedAgents: ['player'],
      capacity: 3,
      minActiveAgents: 2
    },
    {
      id: 'b',
      name: 'Beta',
      resourcePool: 0,
      connectedAgents: ['cooperative'],
      capacity: 3,
      minActiveAgents: 2
    },
    {
      id: 'c',
      name: 'Gamma',
      resourcePool: 0,
      connectedAgents: ['competitive'],
      capacity: 3,
      minActiveAgents: 2
    }
  ],
  currentAgentIndex: 0,
  gameOver: false,
  winner: null
};

const WIN_THRESHOLD = 10;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getAgent(agentId) {
  return gameState.agents.find(a => a.id === agentId);
}

function getNode(nodeId) {
  return gameState.nodes.find(n => n.id === nodeId);
}

function isNodeActive(node) {
  return node.connectedAgents.length >= node.minActiveAgents;
}

function getCurrentAgent() {
  return gameState.agents[gameState.currentAgentIndex];
}

function checkWinCondition() {
  for (const agent of gameState.agents) {
    if (agent.resources >= WIN_THRESHOLD) {
      gameState.gameOver = true;
      gameState.winner = agent;
      return true;
    }
  }
  return false;
}

function incrementNodeResources() {
  for (const node of gameState.nodes) {
    if (isNodeActive(node)) {
      node.resourcePool += 1;
    }
  }
}

// ============================================================================
// VOTING SYSTEM
// ============================================================================

function conductVote(action, agent, targetNode, voters) {
  console.log(`\nVOTE: ${agent.name} wants to ${action.toUpperCase()} ${targetNode ? 'from/to ' + targetNode.name : ''}`);

  const votes = { yes: 0, no: 0, abstain: 0 };

  for (const voterId of voters) {
    const voter = getAgent(voterId);
    const vote = getVote(voter, action, agent, targetNode);
    votes[vote]++;
    console.log(`  ${voter.name} votes: ${vote.toUpperCase()}`);
  }

  const approved = votes.yes > votes.no;
  console.log(`  Result: ${approved ? 'APPROVED' : 'REJECTED'} (${votes.yes} yes, ${votes.no} no${votes.abstain > 0 ? ', ' + votes.abstain + ' abstain' : ''})`);

  return approved;
}

function getVote(voter, action, proposer, targetNode) {
  if (voter.type === 'player') {
    // Player votes are handled separately in the game loop
    return 'yes'; // Default for self-votes
  }

  if (voter.type === 'cooperative') {
    if (action === 'connect') {
      return 'yes';
    }
    if (action === 'claim') {
      // Check for conflict of interest
      const isConnectedToNode = voter.connectedNodes.includes(targetNode.id);
      const wouldClaimThisNode = isConnectedToNode && targetNode.resourcePool > 0;

      if (wouldClaimThisNode && voter.id !== proposer.id) {
        return 'no'; // Conflict of interest
      }
      return 'yes';
    }
  }

  if (voter.type === 'competitive') {
    return 'no'; // Always votes no
  }

  return 'abstain';
}

async function getPlayerVote() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('  Your vote (yes/no/abstain): ', (answer) => {
      rl.close();
      const vote = answer.trim().toLowerCase();
      if (vote === 'yes' || vote === 'y') {
        resolve('yes');
      } else if (vote === 'no' || vote === 'n') {
        resolve('no');
      } else if (vote === 'abstain' || vote === 'a') {
        resolve('abstain');
      } else {
        console.log('  Invalid vote, abstaining...');
        resolve('abstain');
      }
    });
  });
}

async function conductVoteWithPlayer(action, agent, targetNode, voters) {
  console.log(`\nVOTE: ${agent.name} wants to ${action.toUpperCase()} ${targetNode ? 'from/to ' + targetNode.name : ''}`);

  const votes = { yes: 0, no: 0, abstain: 0 };

  for (const voterId of voters) {
    const voter = getAgent(voterId);
    let vote;

    if (voter.type === 'player') {
      vote = await getPlayerVote();
    } else {
      vote = getVote(voter, action, agent, targetNode);
    }

    votes[vote]++;
    console.log(`  ${voter.name} votes: ${vote.toUpperCase()}`);
  }

  const approved = votes.yes > votes.no;
  console.log(`  Result: ${approved ? 'APPROVED' : 'REJECTED'} (${votes.yes} yes, ${votes.no} no${votes.abstain > 0 ? ', ' + votes.abstain + ' abstain' : ''})`);

  return approved;
}

// ============================================================================
// ACTION VALIDATION
// ============================================================================

function validateClaim(agent, nodeId) {
  const node = getNode(nodeId);

  if (!node) {
    return { valid: false, error: 'Node not found.' };
  }

  if (!agent.connectedNodes.includes(nodeId)) {
    return { valid: false, error: `You are not connected to ${node.name}.` };
  }

  if (node.resourcePool <= 0) {
    return { valid: false, error: `${node.name} has no resources to claim.` };
  }

  return { valid: true };
}

function validateConnect(agent, nodeId) {
  const node = getNode(nodeId);

  if (!node) {
    return { valid: false, error: 'Node not found.' };
  }

  if (agent.connectedNodes.includes(nodeId)) {
    return { valid: false, error: `You are already connected to ${node.name}.` };
  }

  if (agent.connectedNodes.length >= 2) {
    return { valid: false, error: 'You already have 2 connections (maximum).' };
  }

  if (node.connectedAgents.length >= node.capacity) {
    return { valid: false, error: `${node.name} is at full capacity.` };
  }

  return { valid: true };
}

function validateDisconnect(agent, nodeId) {
  const node = getNode(nodeId);

  if (!node) {
    return { valid: false, error: 'Node not found.' };
  }

  if (!agent.connectedNodes.includes(nodeId)) {
    return { valid: false, error: `You are not connected to ${node.name}.` };
  }

  return { valid: true };
}

// ============================================================================
// ACTION EXECUTION
// ============================================================================

async function executeClaim(agent, nodeId) {
  const node = getNode(nodeId);
  const voters = node.connectedAgents;

  const approved = await conductVoteWithPlayer('claim', agent, node, voters);

  if (approved) {
    const claimed = node.resourcePool;
    agent.resources += claimed;
    node.resourcePool = 0;
    console.log(`\n${agent.name} claims ${claimed} resources from ${node.name}!`);
    return true;
  } else {
    console.log(`\n${agent.name}'s claim was rejected.`);
    return false;
  }
}

async function executeConnect(agent, nodeId) {
  const node = getNode(nodeId);

  // If node is empty, auto-approve
  if (node.connectedAgents.length === 0) {
    agent.connectedNodes.push(nodeId);
    node.connectedAgents.push(agent.id);
    console.log(`\n${agent.name} connects to ${node.name} (auto-approved, node was empty).`);
    return true;
  }

  // Otherwise, conduct vote (excluding proposer)
  const voters = node.connectedAgents.filter(id => id !== agent.id);

  const approved = await conductVoteWithPlayer('connect', agent, node, voters);

  if (approved) {
    agent.connectedNodes.push(nodeId);
    node.connectedAgents.push(agent.id);
    console.log(`\n${agent.name} connects to ${node.name}!`);
    return true;
  } else {
    console.log(`\n${agent.name}'s connection was rejected.`);
    return false;
  }
}

function executeDisconnect(agent, nodeId) {
  const node = getNode(nodeId);

  agent.connectedNodes = agent.connectedNodes.filter(id => id !== nodeId);
  node.connectedAgents = node.connectedAgents.filter(id => id !== agent.id);

  console.log(`\n${agent.name} disconnects from ${node.name}.`);
  return true;
}

function executePass(agent) {
  console.log(`\n${agent.name} passes.`);
  return true;
}

// ============================================================================
// NPC AI
// ============================================================================

function getNPCAction(agent) {
  // Try to claim from highest-value connected active node
  let bestClaimNode = null;
  let bestClaimValue = 0;

  for (const nodeId of agent.connectedNodes) {
    const node = getNode(nodeId);
    if (isNodeActive(node) && node.resourcePool > bestClaimValue) {
      bestClaimValue = node.resourcePool;
      bestClaimNode = node;
    }
  }

  if (bestClaimNode) {
    return { action: 'claim', target: bestClaimNode.id };
  }

  // If no active connected nodes, try to connect to node with most resources
  let bestConnectNode = null;
  let bestConnectValue = -1;

  for (const node of gameState.nodes) {
    const canConnect = !agent.connectedNodes.includes(node.id) &&
                      agent.connectedNodes.length < 2 &&
                      node.connectedAgents.length < node.capacity;

    if (canConnect && node.resourcePool > bestConnectValue) {
      bestConnectValue = node.resourcePool;
      bestConnectNode = node;
    }
  }

  if (bestConnectNode) {
    return { action: 'connect', target: bestConnectNode.id };
  }

  // Otherwise pass
  return { action: 'pass', target: null };
}

async function executeNPCTurn(agent) {
  const decision = getNPCAction(agent);

  console.log(`\n${agent.name} decides to ${decision.action.toUpperCase()}${decision.target ? ' ' + getNode(decision.target).name : ''}`);

  if (decision.action === 'claim') {
    const validation = validateClaim(agent, decision.target);
    if (validation.valid) {
      await executeClaim(agent, decision.target);
    } else {
      console.log(`Cannot claim: ${validation.error}`);
      executePass(agent);
    }
  } else if (decision.action === 'connect') {
    const validation = validateConnect(agent, decision.target);
    if (validation.valid) {
      await executeConnect(agent, decision.target);
    } else {
      console.log(`Cannot connect: ${validation.error}`);
      executePass(agent);
    }
  } else {
    executePass(agent);
  }
}

// ============================================================================
// DISPLAY
// ============================================================================

function displayState() {
  const agent = getCurrentAgent();

  console.log('\n=====================================');
  console.log(`ROUND ${gameState.round} - ${agent.name}'s Turn`);
  console.log('=====================================');

  const resourceStr = gameState.agents.map(a => `${a.name}: ${a.resources}`).join(' | ');
  console.log(`RESOURCES: ${resourceStr}`);
  console.log(`WIN: First to ${WIN_THRESHOLD} resources`);

  console.log('\nNODES:');
  for (const node of gameState.nodes) {
    const agentNames = node.connectedAgents.map(id => getAgent(id).name).join(', ') || 'None';
    const status = isNodeActive(node) ? 'ACTIVE' : 'DORMANT';
    console.log(`  [${node.id.toUpperCase()}] ${node.name.padEnd(8)} | Resources: ${node.resourcePool} | Agents: ${agentNames} | ${status}`);
  }

  if (agent.type === 'player') {
    const connections = agent.connectedNodes.map(id => getNode(id).name).join(', ') || 'None';
    console.log(`\nYOUR CONNECTIONS: ${connections} (${agent.connectedNodes.length}/2)`);
    console.log('=====================================');
  }
}

function displayHelp() {
  console.log('\nAvailable actions:');
  console.log('  claim <node>      - Claim all resources from a connected node (requires vote)');
  console.log('  connect <node>    - Connect to a node (requires vote if occupied)');
  console.log('  disconnect <node> - Disconnect from a node (no vote required)');
  console.log('  pass              - Do nothing');
  console.log('  help              - Show this help message');
  console.log('\nNode IDs: a (Alpha), b (Beta), c (Gamma)');
}

// ============================================================================
// INPUT HANDLING
// ============================================================================

function parseAction(input) {
  const parts = input.trim().toLowerCase().split(/\s+/);
  const command = parts[0];
  const target = parts[1];

  return { command, target };
}

async function getPlayerAction() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('\nYour action: ', async (answer) => {
      rl.close();
      const { command, target } = parseAction(answer);

      if (command === 'help') {
        displayHelp();
        resolve(await getPlayerAction());
        return;
      }

      resolve({ command, target });
    });
  });
}

async function executePlayerTurn(agent) {
  let actionExecuted = false;

  while (!actionExecuted) {
    const { command, target } = await getPlayerAction();

    if (command === 'claim') {
      const validation = validateClaim(agent, target);
      if (!validation.valid) {
        console.log(`Invalid: ${validation.error}`);
        continue;
      }
      await executeClaim(agent, target);
      actionExecuted = true;
    } else if (command === 'connect') {
      const validation = validateConnect(agent, target);
      if (!validation.valid) {
        console.log(`Invalid: ${validation.error}`);
        continue;
      }
      await executeConnect(agent, target);
      actionExecuted = true;
    } else if (command === 'disconnect') {
      const validation = validateDisconnect(agent, target);
      if (!validation.valid) {
        console.log(`Invalid: ${validation.error}`);
        continue;
      }
      executeDisconnect(agent, target);
      actionExecuted = true;
    } else if (command === 'pass') {
      executePass(agent);
      actionExecuted = true;
    } else {
      console.log('Invalid command. Type "help" for available actions.');
    }
  }
}

// ============================================================================
// GAME LOOP
// ============================================================================

async function runTurn() {
  const agent = getCurrentAgent();

  displayState();

  if (agent.type === 'player') {
    await executePlayerTurn(agent);
  } else {
    await executeNPCTurn(agent);
  }

  // After action, increment resources for active nodes
  incrementNodeResources();

  // Check win condition
  if (checkWinCondition()) {
    return;
  }

  // Move to next agent
  gameState.currentAgentIndex++;

  // If all agents have taken their turn, start a new round
  if (gameState.currentAgentIndex >= gameState.agents.length) {
    gameState.currentAgentIndex = 0;
    gameState.round++;
  }
}

async function startGame() {
  console.log('=====================================');
  console.log('     POLIS - Proof of Concept');
  console.log('=====================================');
  console.log('\nA turn-based strategy game where actions affecting others require approval by vote.');
  console.log('\nType "help" during your turn for available actions.');

  gameState.round = 1;

  while (!gameState.gameOver) {
    await runTurn();
  }

  // Display winner
  console.log('\n\n=====================================');
  console.log('           GAME OVER');
  console.log('=====================================');
  console.log(`\n${gameState.winner.name} wins with ${gameState.winner.resources} resources!`);
  console.log('\nFinal scores:');
  for (const agent of gameState.agents) {
    console.log(`  ${agent.name}: ${agent.resources} resources`);
  }
  console.log('\n=====================================');
}

// ============================================================================
// ENTRY POINT
// ============================================================================

startGame().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
