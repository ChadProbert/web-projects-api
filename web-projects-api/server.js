const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

/* all of the code inside of index.js will append their own respective 
routing to localhost:8080/api */
app.use("/api", routes);

// specifying the port which will listen to requests
const PORT = 8080;
app.listen(PORT, () => console.log("Listening on PORT", PORT));

/* references:

https://www.youtube.com/watch?v=nX7jGHgD9t8

*/
