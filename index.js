const express = require("express")
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();




// Middleware                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000')

});

app.get('/', (req, res) => {
    res.send("Hello from node api server update!")
});

mongoose.connect("mongodb+srv://AdminTyson:Daraty012812667@backenddb.vuapz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log('Connected!')
  })
  .catch(() => {
    console.log("Connection error")
  });
