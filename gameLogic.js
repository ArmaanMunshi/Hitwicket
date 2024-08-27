// gameLogic.js (Game Logic)
const { validateMove, updateGameState } = require('./gameState');

function handleGameEvents(message, ws, wss) {
    switch (message.type) {
        case 'initializeGame':
            // Set up initial game state
            break;
        case 'playerMove':
            const { valid, newState } = validateMove(message);
            if (valid) {
                updateGameState(newState);
                broadcastGameState(wss, newState);
            } else {
                ws.send(JSON.stringify({ type: 'invalidMove' }));
            }
            break;
        case 'gameOver':
            // Handle game over
            break;
    }
}

function broadcastGameState(wss, gameState) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'gameStateUpdate', gameState }));
        }
    });
}

module.exports = { handleGameEvents };
