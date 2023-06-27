const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const http = require('http');
const socketio = require('socket.io');
const { generatemsg, generateLocation } = require('./utils/messages');

const { addUser, removeUser, getUser, getUserInRoom } = require('./utils/users');
const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
const io = socketio(server);
const publicdir = path.join(__dirname, './public');
app.use(express.static(publicdir));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
app.set("view engine", "hbs");
// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//main page to render
app.get("/", (req, res) => {
  console.log("Loading");
  res.render("login", { layout: "index" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

io.on("connection", (socket) => {
  console.log("new connection");
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
