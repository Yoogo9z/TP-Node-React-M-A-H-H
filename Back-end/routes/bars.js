import express from 'express';
import  Bar  from '../models/bar.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newBar = await Bar.create(req.body);
        res.status(201).json(newBar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const bar = await Bar.findByPk(id);
        if (bar) {
            await bar.update(req.body);
            res.json(bar);
        } else {
            res.status(404).json({ error: 'Bar not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const bar = await Bar.findByPk(id);
        if (bar) {
            await bar.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Bar not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const bars = await Bar.findAll();
        res.json(bars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const bar = await Bar.findByPk(id);
        if (bar) {
            res.json(bar);
        } else {
            res.status(404).json({ error: 'Bar not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;