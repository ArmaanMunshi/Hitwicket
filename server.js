// server.js (Server Setup)
const express = require('express');
const { WebSocketServer } = require('ws');
const { handleGameEvents } = require('./gameLogic');
const PORT = process.env.PORT || 3000;

const app = express();
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        handleGameEvents(message, ws, wss);
    });

    ws.on('close', () => {
        // Handle player disconnection
    });
});
