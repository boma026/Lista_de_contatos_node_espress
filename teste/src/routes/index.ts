import express, { Router } from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.json({teste: "Olá"})
})

router.post ("/contato", (req,res) => {
    const name = req.body.name

    if (!name || name.length < 2) {
        res.json({error: "Nome precisa existir e ter ao menos 2 caracteres"});
    }

   res.status(201).json({contact: name})
})

export default router;