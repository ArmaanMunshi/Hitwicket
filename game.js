// game.js (Game Rendering & Interaction)
function renderGameState(gameState) {
    const board = document.getElementById('game-board');
    board.innerHTML = '';  // Clear previous state

    gameState.board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell) {
                cellElement.textContent = cell;  // Display character
            }
            board.appendChild(cellElement);
        });
    });
}

function handleCharacterClick(character) {
    // Display valid moves based on character type and position
    const moveOptions = calculateValidMoves(character);
    renderMoveOptions(moveOptions);
}

function renderMoveOptions(options) {
    const optionsContainer = document.getElementById('move-options');
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => sendMove(character, option);
        optionsContainer.appendChild(optionButton);
    });
}
