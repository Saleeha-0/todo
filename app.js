const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { db } = require("./models/index");

const userRouter = require("./Routes/userRouter");
const authRouter = require("./Routes/authRouter");
const vendorRouter = require("./Routes/vendorRouter");
const productRouter = require("./Routes/productRouter");


const port = 3000;

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use("/user",userRouter);
app.use("/auth",authRouter);
app.use("/vendor",vendorRouter);
app.use("/product",productRouter);



app.use((req,res,next)=>{
     res.send({
        status : 404,
        error : "error",
    });
    next(createError(404));
});

db.connection 
.sync({alter:true})
.then(()=>{
    app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
    });
})
.catch((error)=>{
    console.log("error");
    console.log("unable to connect to dataserver")
})

