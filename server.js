const express=require('express');
const app=express();
const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
      res.send("Hello Worldevcfvrvrbrgb     dfkfkkbkfb  hhvghhhvvgg");
})
app.listen(port,()=>{
      console.log(`Server is running at port ${port}`);
}
)

