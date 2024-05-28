import express from 'express';
import Biere from '../models/biere.js';
const router = express.Router();
//aficher les bieres
router.get('/', async (req, res) => {
    try {
        const bieres = await Biere.findAll();
        res.json(bieres);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
// rechercher une biere
router.get('/:id', async (req, res) => {
    try {
        const bieres = await Biere.findByPk(id)
        res.json(bieres);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
// ajouter une biere
router.post('/', async (req, res) => {
    try {
        const newBiere = await Biere.create(req.body);
        res.status(201).json(newBiere);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
// modifier une biere
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biere = await Biere.findByPk(id)
        if (biere) {
            await biere.update(req.body)
            res.json(biere)
        } else {
            res.status(404).json({ error: 'biere not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})
// supprimer une biere
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const biere = await Biere.findByPk(id)
        if (biere) {
            await biere.destroy()
            res.status(204).end()
        } else {
            res.status(404).json({ error: 'biere not found' })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


export default router;