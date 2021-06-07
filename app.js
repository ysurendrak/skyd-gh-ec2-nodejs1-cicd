const express = require('express');
const app = express();
const port = 3000;

app.get('/' , (req , res)=>{

   res.send('<h1>hello from simple ver : 1.0)</h1>')

})

app.get('/products' , (req , res)=>{

   res.send([
       {
           productid: '101',
           price: 100
       },
       {
            productid: '102',
            price: 200
        }])

})

app.listen(port, ()=> {
    console.log('Demo app listening on ${port}')
})
