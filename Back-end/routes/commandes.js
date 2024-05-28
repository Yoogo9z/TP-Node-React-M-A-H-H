import express from 'express';
import Commande from '../models/commande.js';
const router = express.Router();

router.get('/', async(req,res)=>{
    try {
        const commandes = await Commande.findAll();
        res.json(commandes);
    } catch (err) {
        res.status(500).json({"error": "err.message"});
    } 
});

router.get('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const commande = await Commande.findByPk(id);
        res.json(commande);
    } catch (err) {
        res.status(500).json({"error": "err.message"});
    } 
});

router.post('/', async(req,res)=>{
    try {
        const newCommande = await Commande.create(req.body);
        res.status(201).json(`${newCommande.name} is inserted`);
    } catch (err) {
        res.status(500).json({"error": "err.message"});
    }
});

router.put('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const updateCommande = await Commande.findByPk(id);
        if (updateCommande){
            await updateCommande.update(req.body);
            res.json(updateCommande);
        }else{
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({"error": "err.message"});
    } 
});

router.delete('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteCommande = await Commande.findByPk(id);
        if (deleteCommande){
            await deleteCommande.destroy();
            res.status(204).end();
        }else{
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({"error": "err.message"});
    } 
});

export default router;