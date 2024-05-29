import express from 'express';
import biereCommandes from '../models/biereCommande.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const biereCommandes = await biereCommandes.findAll();
        res.json(biereCommandes);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newbiereCommandes = await biereCommandes.create(req.body);
        res.status(201).json(newbiereCommandes);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biereCommandes = await biereCommandes.findByPk(id)
        if (biereCommandes) {
            await biereCommandes.update(req.body)
            res.json(biereCommandes)
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
        const biereCommandes = await biereCommandes.findByPk(id)
        if (biereCommandes) {
            await biereCommandes.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;