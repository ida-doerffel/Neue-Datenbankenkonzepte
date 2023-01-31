// import modules
// import { createServer } from "http";
// import { Server } from "socket.io";
// import { v4 as uuidv4 } from "uuid";
// import { setupWorker } from "@socket.io/sticky"
// import {
//     saveSession,
//     findSession,
//     findAllSessions,
// }from "./src/sessionStorage.js";
// import { 
//     findMessagesForUser,
//     saveMessage
// } from "./src/messageStorage.js";

// add divs from index.html
const sendMessage = document.querySelector('.send-form');
const targetDiv = document.querySelector('.new-messages');
const contact = document.querySelector('.contact');

const messages = [
    {person: 'A', title: 'test'},
    {person: 'B', title: 'works'},
]

function renderMessages(elements) {
    targetDiv.innerHTML = '';
    for (const element of elements) {
        const div = document.createElement('div');
        div.className = "message"
        div.innerHTML = `
            <strong>Von ${element.person}</strong><br/>${element.title}     
        `;
        targetDiv.appendChild(div);
    }
}

function addMessage(title) {
    messages.push({
        person: 'A',
        title: title
    });
    renderMessages(messages);
}

sendMessage.addEventListener('submit', (event)=> {
    event.preventDefault();
    const input = document.querySelector('[name="message"]');
    addMessage(input.value);
});

// const httpServer = createServer();
// const clientUrl = "http://localhost:3456";

// const io = new Server(httpServer, {
//     cors: {
//         origin: clientUrl,
//         Methods: ["GET", "POST"],
//     },
// });

// io.use((socket, next) =>{
//     const sessionId = socket.handshake.auth.sessionId;
//     if (sessionId){
//         const session = findSession(sessionId);
//         if (session){
//             socket.sessionId = sessionId;
//             socket.userId = session.userId;
//             socket.username = session.username;
//             return next();
//         } else {
//             return next(new Error("Invalid session"));
//         }
//     }
    
//     const username = socket.handshake.auth.username;
//     if (!username){
//         return next(new Error("Invalid username"));
//     }

//     socket.username = username;
//     socket.userId = uuidv4();
//     socket.sessionId = uuidv4();
//     next();
// })

// export function start(){
//     setupWorker(io);
// }

// Initial render
renderMessages(messages)