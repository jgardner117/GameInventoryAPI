const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./db_queries')
app.use(express.static('public'))

//Default endpoint, lists all of the available endpoints
app.get('/', function(req, res) {
  res.json({
    "API Name": "Game Inventory API ver 1.0",
    "Available endpoints": {
      "/allgames": "Returns all games in the inventory as well as all database fields",
      "/gamebyid/:id": "Returns a specific game by it's id",
      "/gamesbyconsole/:cons": "Returns all games per specified console",
      "/getgamesbymultiplayer/:bool": "Returns all games with local multiplayer",
      "/getgamesbylocalmultinumber/:players": "returns all multiplayer games that allow up to the specified number of local players",
      "/getrandomgame": "Returns a single random game",
      "/getrandomgamebyconsole/:cons": "returns a single random game by console"
    }
  });
});
//This endpoint returns all games in the inventory as well as all database fields
app.get('/allgames', db.getAllGames)

//This endpoint returns a specific game by it's id
app.get('/gamebyid/:id', db.getGameById)

//This endpoint returns all games per specified console
app.get('/gamesbyconsole/:cons', db.getGamesByConsole)

//This endpoint returns all multiplayer games
app.get('/getgamesbymultiplayer/:bool', db.getGamesByMultiplayer)

//This endpoint returns all multiplayer games that allow up to the specified number of local players
app.get('/getgamesbylocalmultinumber/:players', db.getGamesByLocalMultiNumber)

//This endpoint returns a single random game
app.get('/getrandomgame', db.getRandomGame)

//This endpoint returns a single random game by console
app.get('/getrandomgamebyconsole/:cons', db.getRandomGameByConsole)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app
