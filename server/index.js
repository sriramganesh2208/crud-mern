require("dotenv").config();
const express = require("express");
const cors = require("cors");

const crudRoutes = require("./routes/crudRoutes");

const app = express();
const PORT = process.env.PORT || 3000;



// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/cruds", crudRoutes);
//app.use("/api/auth", authRoute);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
