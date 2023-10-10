// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
app.get('/test',(req,res)=>{res.json({msg:'hi app is running'})})
// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
"mongodb+srv://neilikamel:kamelneili001@cluster0.u9h4wxg.mongodb.net/?retryWrites=true&w=majority";
// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
