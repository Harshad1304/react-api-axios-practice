import express from 'express'

const app = express();

app.get('/api/products',(req, res)=>{
    const products = [
        {
          "id": 9,
          "name": "Smart TV",
          "price": 799.99,
          "images": "https://via.placeholder.com/300x300.png?text=TV"
        },
        {
          "id": 3,
          "name": "Wireless Headphones",
          "price": 149.99,
          "images": "https://via.placeholder.com/300x300.png?text=Headphones"
        },
        {
          "id": 6,
          "name": "Tablet",
          "price": 299.99,
          "images": "https://via.placeholder.com/300x300.png?text=Tablet"
        },
        {
          "id": 5,
          "name": "Camera",
          "price": 699.99,
          "images": "https://via.placeholder.com/300x300.png?text=Camera"
        },
        {
          "id": 10,
          "name": "Electric Scooter",
          "price": 599.99,
          "images": "https://via.placeholder.com/300x300.png?text=Scooter"
        },
        {
          "id": 1,
          "name": "Smartphone",
          "price": 499.99,
          "images": "https://via.placeholder.com/300x300.png?text=Smartphone"
        },
        {
          "id": 4,
          "name": "Smartwatch",
          "price": 199.99,
          "images": "https://via.placeholder.com/300x300.png?text=Smartwatch"
        },
        {
          "id": 2,
          "name": "Laptop",
          "price": 899.99,
          "images": "https://via.placeholder.com/300x300.png?text=Laptop"
        },
        {
          "id": 8,
          "name": "Gaming Console",
          "price": 499.99,
          "images": "https://via.placeholder.com/300x300.png?text=Console"
        },
        {
          "id": 7,
          "name": "Bluetooth Speaker",
          "price": 89.99,
          "images": "https://via.placeholder.com/300x300.png?text=Speaker"
        }
      ]

      if(req.query.search){
        const filterdProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterdProducts);
        return;
      }
      
      setTimeout(()=>{
        res.send(products)
      },3000)
})

const port = process.env.PORT||3000;

app.listen(port, ()=>{
    console.log(`Server running on port${port}`)
})