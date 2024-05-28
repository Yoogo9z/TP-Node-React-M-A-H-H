import express from 'express';
import Biere_commande from '../models/biere_commande.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const biere_commande = await Biere_commande.findAll();
        res.json(biere_commande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newBiere_commande = await Biere_commande.create(req.body);
        res.status(201).json(newBiere_commande);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biere_commande = await Biere_commande.findByPk(id)
        if (biere_commande) {
            await biere_commande.update(req.body)
            res.json(biere_commande)
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
        const biere_commande = await Biere_commande.findByPk(id)
        if (biere_commande) {
            await biere_commande.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'Not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;