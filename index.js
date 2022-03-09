const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  return res.json({
    success: true,
    message: 'Backend is running well'
  })
})

app.listen(8080, ()=>{
  console.log("App running...");
})