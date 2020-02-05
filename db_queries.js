const Pool = require('pg').Pool
const dotenv = require('dotenv').config();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

//This function returns all games with all fieldsS
const getAllGames = (request, response) => {
  pool.query('SELECT * FROM gameinventory', (error, results) => {
    if (error) {
      response.status(500).json({
        "Error": error
      })
    }
    response.status(200).json(results.rows)
  })
}

//This function returns a game by searching for it's ID
const getGameById = (request, response, next) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM gameinventory WHERE id = $1', [id], (error, results) => {
    if (error) {
      //Error handling for a non-numeric request parameter (id must be numeric)
      if (error.code = "22P02") {
        response.status(400).json({
          "Error": "id parameter must be numeric"
        })
      } else {
        response.status(500).json({
          "Error": error
        })
      }
    } else {
      response.status(200).json(results.rows)
    }
  })
}

//This function returns a complete list of games for the console specified
const getGamesByConsole = (request, response) => {
  const cons = request.params.cons
  console.log(cons)
  pool.query('SELECT * FROM gameinventory WHERE LOWER(gameinventory.console) = lower($1)', [cons], (error, results) => {
    if (error) {
      response.status(500).json({
        "Error": error
      })
    }
    response.status(200).json(results.rows)
  })
}

//This function returns a complete list of games by local multiplayer
const getGamesByMultiplayer = (request, response) => {
  const bool = request.params.bool
  pool.query('SELECT * FROM gameinventory WHERE gameinventory.local_multiplayer = $1', [bool], (error, results) => {
    if (error) {
      response.status(500).json({
        "Error": error
      })
    }
    response.status(200).json(results.rows)
  })
}

//This function returns a complete list of games that support up to the max amount of local players passed
const getGamesByLocalMultiNumber = (request, response) => {
  const players = request.params.players
  pool.query('SELECT * FROM gameinventory WHERE gameinventory.max_local_players = $1', [players], (error, results) => {
    if (error) {
      response.status(500).json({
        "Error": error
      })
    }
    response.status(200).json(results.rows)
  })
}

//This function returns a single random game
const getRandomGame = (request, response) => {
  pool.query('select * from gameinventory ORDER BY random() limit 1', (error, results) => {
    if (error) {
      response.status(500).json({
        "Error": error
      })
    }
    response.status(200).json(results.rows)
  })
}

//This function returns a single random game by console
const getRandomGameByConsole = (request, response) => {
  const cons = request.params.cons
  console.log(cons)
  pool.query('select * from gameinventory WHERE LOWER(gameinventory.console) = lower($1) ORDER BY random() limit 1', [cons], (error, results) => {
    if (error) {
      response.status(500).json({
        "Error": error
      })
    }
    response.status(200).json(results.rows)
  })



}


module.exports = {
  getAllGames,
  getGameById,
  getGamesByConsole,
  getGamesByMultiplayer,
  getGamesByLocalMultiNumber,
  getRandomGame,
  getRandomGameByConsole,
}
