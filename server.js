const path = require("path");
const express = require("express");
const expressHbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
//const hbs = exphbs.create({ helpers });
//app.set("view engine", "hbs");
// Inform Express.js on which template engine to use
app.engine(
  "handlebars",
  expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "handlebars",
  })
);

//app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "views");

//main page to render
// app.get("/", (req, res) => {
//   console.log("Loading");
//   res.render("login");
// });

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
