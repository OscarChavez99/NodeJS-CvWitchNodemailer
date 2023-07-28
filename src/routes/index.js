import { Router } from 'express'
import LoadSkills from '../functions/skills.js' //Get 3 random skills function

const router = Router()
//inicio
router.get('/', (req, res) => {
    var skills = LoadSkills();
    const four_skills = skills[1];
    res.render('index', {title: 'First Node.JS website', four_skills});
});
//skills
router.get('/skills', (req, res) => {
    var skills = LoadSkills();
    const all_skills = skills[0];
    res.render('skills', {title: 'Skills', all_skills});
});

//contact
router.get('/contact', (req, res) => {
    const { success } = req.query;
    res.render('contact', { success });
});

export default router
