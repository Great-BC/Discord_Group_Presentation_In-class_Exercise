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

## Viewing the Project:
Use Live Server in VS Code to preview index.html in your browser.
The chat interface will automatically connect to the WebSocket server.

--- 

## Troubleshooting

| **Issue**               | **Solution**                                                         |
|-------------------------|----------------------------------------------------------------------|
| Missing dependencies     | Run `npm install` to install all required dependencies.             |
| Port conflicts           | Change the port in `server.js` if another process is using it.      |
| Connection issues        | Verify the WebSocket URL in the frontend (`ws://localhost:3002`).    |

---

## Customization
Modify style.css to update the chat interface design 
Extend server.js to include more features, such as:
* Implementing user authentication.
* Storing and displaying message history.

---
## Useful VS Code Extensions
* Live Server: Preview index.html instantly.
* Code Runner: Run code instantly without using the terminal.