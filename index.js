const express = require("express")
const mongoose = require('mongoose')
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer
const pessoa = require("./models/pessoa")

const setup = async () =>{
    const mongod = await MongoMemoryServer.create()
    await mongoose.connect(`${mongod.getUri()}banco`)

    const app = express()

    app.use(express.json())

    app.get("/", (req, res) =>{
        res.send("Online")
    })

    app.post("/pessoa", async(req, res)=>{
        console.log(req.body)
        const{
            nome,
            cpf,
            ra,
            idade
        } = req.body

        const novaPessoa = new pessoa({nome: nome, cpf:cpf, ra:ra, idade:idade})
        await novaPessoa.save()
        console.log("Pessoa salva:")
        res.send(novaPessoa)
    })

    app.listen(3000, () => {
        console.log("http://localhost:3000")
    })
}

setup();
