const express = require("express");
const app = express();
const PORT = 8000;

const artists = {
    "21 savage" : {
        "age": 29,
        "birthName": "Sheyaa Bin Abraham-Joseph",
        "birthLocation": "London, England" 
    },
    "chance the rapper" : {
        "age": 29,
        "birthName": "Chancelor Bennett",
        "birthLocation": "Chicago, Illinois" 
    },
    "unknown": {
        "age": 0,
        "birthName": "unknown",
        "birthLocation": "unknown" 
    }
} 

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
});

app.get("/api/:name", (request, response) => {
    const artistName = request.params.name.toLowerCase();
    if (artists[artistName]) {
        response.json(artists[artistName]);
    } else {
        response.json(artists["unknown"])
    }    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`);
});