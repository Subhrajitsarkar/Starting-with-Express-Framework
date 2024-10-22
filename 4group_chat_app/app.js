const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// GET route
app.get("/", (req, res) => {
    // Read the username and message from the file
    fs.readFile('username.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = 'No chat exists';
        }
        // Send the form and display the messages from the file
        res.send(`
            ${data}
            <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
                <input type="text" name="message" id="message" placeholder="Enter your message">
                <input type="hidden" name="username" id="username">
                <button type="submit">Send</button>
            </form>
        `);
    });
});

// POST route to handle form submission
app.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    // Append the username and message to the file
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}\n`, { flag: 'a' }, (err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

// Serve login page
app.get('/login', (req, res) => {
    res.send(`
        <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="GET">
            <input type="text" id="username" name="username" placeholder="Enter your username" required>
            <button type="submit">Login</button>
        </form>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
