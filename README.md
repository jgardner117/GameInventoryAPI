# Game Inventory API
A Node.JS &amp; Express based API that returns games from my video game inventory AWS RDS Postgres database

This Javascript API uses Node.JS and Express to query and return data from my personal video game library, which is stored in a Postgres AWS RDS instance. I'm an avid game collector with a large collection, and needed to catalog the games that I own, their condition, their value, whether there was local multiplayer (for LAN nights!) and interesting facts about them. This application is the back end to a larger framework I'm creating to track and sort my collection. My initial solution many years ago was a Google Sheets document, however my collection has grown to a point that the Sheet was unwieldy and cumbersome. There are a few apps that offer similar services but I wanted to create something custom that would work for my unique use cases.


## To Do:
* Add search endpoints once UI is complete (for example, searching by name using the SQL LIKE operator)
* Add Create/Update endpoints to add new games/consoles or update existing consoles
* Add endpoints for collection stats and collection value. The tables are already populated, just need endpoints once the UI has been created.


## Authors
* **Jesse Gardner** - *Creator* - [Github](https://github.com/HatePH34R)
