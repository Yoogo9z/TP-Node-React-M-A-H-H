import express from 'express';
import BiereCommande from '../models/biereCommande.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const biereCommande = await BiereCommande.findAll();
        res.json(biereCommande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newBiereCommande = await BiereCommande.create(req.body);
        res.status(201).json(newBiereCommande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biereCommande = await BiereCommande.findByPk(id)
        if (biereCommande) {
            await biereCommande.update(req.body)
            res.json(biereCommande)
        } else {
            res.status(404).json({ error: 'Not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biereCommande = await BiereCommande.findByPk(id)
        if (biereCommande) {
            await biereCommande.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;