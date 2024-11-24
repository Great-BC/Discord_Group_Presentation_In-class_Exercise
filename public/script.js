
const socket = new WebSocket(`ws://localhost:3002`);

// Incoming Messages Handler
socket.onmessage = (event) => {
    const messagesContainer = document.getElementById('messages');
    // Checks if the data is a Blob (binary data)
    if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
            // Uses reader.result to get the string
            messagesContainer.innerHTML += `<p>${reader.result}</p>`; 
        };
        // Converts Blob to string
        reader.readAsText(event.data); 

    } 
    // Appends the data if its already a string
    else {
        messagesContainer.innerHTML += `<p>${event.data}</p>`;  
    }
};

// Send a message to the server
document.getElementById('sendButton').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== '') {
        socket.send(message);
        messageInput.value = '';
    }
});