const express = require('express');
const app = express();

app.use(express.static(__dirname  + '/public'))

app.get('/home', (request, response)=>{

    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response)=>{
    response.sendFile (__dirname + '/views/about.html')
})

app.get('/photoGallery', (request, response)=>{
    response.sendFile (__dirname + '/views/photoGallery.html')
})

app.get('/works', (request, response)=>{
    response.sendFile (__dirname + '/views/works.html')
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost: 3000`)
  })
