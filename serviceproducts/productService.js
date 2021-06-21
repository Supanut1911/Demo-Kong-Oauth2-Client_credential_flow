const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

const products = [
    {
        id: 'Obj001',
        name: "metal",
        price: 100
    },
    {
        id: 'obj002',
        name: "wheel",
        price: 12

    },
    {
        id: 'obj003',
        name: "rubber",
        price: 4000

    },
    {
        id: 'obj004',
        name: "carbon",
        price: 800
    },
]



app.get('/products', (req, res) => {
    res.send(products)
})

app.post('/products', (req, res) => {
    res.send(products)
})


app.listen(7799, () => {
    console.log('server 77799 running');
})