const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const { connectDB } = require("./config/db_config"); 
const app = express();
const cookieParser = require('cookie-parser');
const ingredientsRouter = require("./routes/ingredients.routes");


const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use('/',ingredientsRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀Ingredients Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Could not start server: DB connection failed", err);
    process.exit(1);
  });

// Routes
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Success" });
});
