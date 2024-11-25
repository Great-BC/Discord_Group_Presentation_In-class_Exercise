// WebSocket Connection
const socket = new WebSocket(`ws://localhost:3002`);

// Send a message to the server
document.getElementById('sendButton').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.send( message);
        messageInput.value = '';
    }

});