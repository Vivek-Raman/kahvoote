# kahvoote

A smart voting system that can be used by teams to vote on scores for statements. It can be used as a tool for ticket management, or as a casual pop quiz!

This demo is built on the [Vue framework](https://vuejs.org/). It's pretty cool.

This demo interacts with a backend built on Spring Boot, interacting with PostgreSQL. [Here](https://github.com/shreeshahi007/smartvoting/releases) is the link to the backend repository.

## Project setup
 - Get PostgreSQL installed and running with default config.
 - Head to the link above and download the JAR file.
 - Run it using `java -jar <filename>.jar`.
 - Clone this repo.
 - Run `npm install`.
 - On the frontend, head on over to `./src/config/api.js` and replace the base URL with `<your-ip-address>:9090`.
 - `npm run serve`!

## Screenshots

### Landing Page
![Landing Page](https://imgur.com/9CYQnJh.png)

### Create Room
![Create Room](https://imgur.com/6XPT6JU.png)

### Room Info
![Room Info](https://imgur.com/M1jUDQl.png)

### Join Room
![Join Room](https://imgur.com/92GD8iR.png)

### Set Statement
![Set Statement](https://imgur.com/ftTuIrv.png)

### Room Dashboard (as user)
![Room Dashboard](https://imgur.com/QrXwIcg.png)

### Add Response
![Add Response](https://imgur.com/KCd3IBH.png)

### Statement History
![Statement History](https://imgur.com/QRP9Ch3.png)
