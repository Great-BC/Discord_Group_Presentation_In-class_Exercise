// Imports
const express = require('express');
const WebSocket = require('ws');
const http = require('http');

// Initializes Express
const app = express();

// Makes use of frontend files in public directory
app.use(express.static('public'));
// Creates and http server
const server = http.createServer(app);
// Creates and instance of the webSocket and attaches the http server
const wss = new WebSocket.Server({server});


//  Web Socket Connections Handler
wss.on('connection', (ws) => {
    console.log("Client Connection Established");
    // Broadcasts Messages to All Clients
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    })
    
    // Sends Disconnection Message When Connection is Closed
    ws.on('close', () => {
        console.log('Client disconnected');
    });
})

// Starts the server
const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});