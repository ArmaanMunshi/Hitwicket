// websocket.js (Client WebSocket Communication)
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    // Initialize the game and notify the server
    socket.send(JSON.stringify({ type: 'initializeGame' }));
};

socket.onmessage = (event) => {
    const message = JSON.parse(event.data);

    switch (message.type) {
        case 'gameStateUpdate':
            // Update UI with new game state
            renderGameState(message.gameState);
            break;
        case 'invalidMove':
            // Display an invalid move message to the player
            alert('Invalid Move! Try again.');
            break;
        case 'gameOver':
            // Announce the winner and offer to restart the game
            break;
    }
};

function sendMove(character, move) {
    socket.send(JSON.stringify({ type: 'playerMove', character, move }));
}
