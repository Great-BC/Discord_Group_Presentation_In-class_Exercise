# Discord_Group_Presentation_In-class_Exercise
COMP2068 JavaScript Frameworks - 01 Group Tutorials In-class Exercise:

A simple WebSocket-based chat application for real-time communication, created as a tutorial for COMP 2068.

## Overview

This project demonstrates how to set up a WebSocket server using Node.js and create a basic frontend for real-time communication. It’s designed to teach the basics of WebSocket technology.

---

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/Great-BC/Discord_Group_Presentation_In-class_Exercise.git

```
### Step2: Install Node.js Dependencies
```bash
npm install
```
### Step3: Run the Application
```bash
node server.js
```

--- 

## Troubleshooting

| **Issue**               | **Solution**                                                         |
|-------------------------|----------------------------------------------------------------------|
| Missing dependencies     | Run `npm install` to install all required dependencies.             |
| Port conflicts           | Change the port in `server.js` if another process is using it.      |
| Connection issues        | Verify the WebSocket URL in the frontend (`ws://localhost:3002`).    |

---

## Useful VS Code Extensions
* Live Server: Preview index.html instantly.
* Code Runner: Run code instantly without using the terminal.

---

## Activity: Adding Client Side Message Viewing Functionality to the Project:
### Step1: Opening the Project in a Browser
Use Live Server in VS Code to open index.html in your browser.
The chat interface will automatically connect to the WebSocket server.

### Step2: Creating the Message Viewer HTML (index.html)
- **Outer Container**: Create a `<div>` with the class `messages-container` to hold the entire message viewer.
- **Header Section**: Inside the `messages-container`, add a `<div>` with the class `message-header` and an `<h3>` tag for the title, e.g., "Chat Room 💬".
- **Content Section**: Add another `<div>` inside `messages-container` with the class `message-content` and an ID `messages` to display chat messages.
- **Placeholder Message**: Inside the `message-content`, include a `<p>` tag with the class `placeholder` and the text "No messages yet. Start the conversation!" to show when there are no messages.

### Step3: Adding the Styling for the Message Viewer (style.css)
- **Style the container**: Add a scrollbar in the message content for overflow using `overflow-y: auto;`.
- **Make it visually distinct**: Style the rest of the elements according to your visual preference.

### Step4: Implementing the Incoming Messages Handler (script.js)
- **Set Up WebSocket `onmessage` Handler**: Add an event listener for the WebSocket's `onmessage` event to handle incoming messages.
- **Check for Blob Data**: Check if the incoming data is a `Blob` (binary data) using `event.data instanceof Blob`.
- **Convert Blob to String**: If the data is a `Blob`, use a `FileReader` to read the data as text (`reader.readAsText(event.data)`), and append it to the messages container.
- **Append String Data**: If the data is already a string, directly append it to the `messagesContainer` as a paragraph (`<p>`).
- **Remove the Placeholder**: Clear the placeholder

### Step5: Prompting for Username for the Messages (script.js)
- **Initialize Username**: Declare a variable `let username = ''` to store the user's name.
- **Prompt for Username**: Use a `while` loop to prompt the user for a username when they open the page, ensuring the username is not empty (`username.trim()`).
- **Send Message with Username**: Before sending a message, prepend the `username` to the message by using template literals: `socket.send(`${username}: ${message}`);`.
- **Clear Message Input**: After sending the message, clear the input field by setting `messageInput.value = '';`.
### Step6: Optional: Additional Customization
Modify style.css to update the chat interface design.
Extend server.js to include more features, such as:
* Implementing user authentication.
* Storing and displaying message history.

