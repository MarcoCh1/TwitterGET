require('dotenv').config();



const express = require('express');

let fetch;
import('node-fetch').then(({ default: fetchImported }) => {
    fetch = fetchImported;
});


const app = express();
const port = 3000;

app.use(express.static('.')); // Serve static files

app.get('/getUserInfo', (req, res) => {
    const username = req.query.username;
    const url = `https://api.twitter.com/2/users/by/username/${username}`;

    const bearerToken = process.env.TWITTER_BEARER_TOKEN;

    fetch(url, {
        headers: {"Authorization": `Bearer ${bearerToken}`}

    })
        .then(response => response.json())
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
