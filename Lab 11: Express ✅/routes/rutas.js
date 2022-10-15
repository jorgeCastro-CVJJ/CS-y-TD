const express = require('express');
const fs = require('fs')
const router = express.Router();

router.get('/perritos', (req, res) => {
    res.setHeader('Content-Type','text/html')
    res.write('<h1>Perritos!!</h1>')
    res.write('<img src="https://imgs.search.brave.com/VsxKzS65s1RISZQ-R6U-8kQFpCY__ZvImR4gMmhIS68/rs:fit:800:400:1/g:ce/aHR0cHM6Ly93d3cu/ZG9nYWxpemUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA2L0xhLXN2ZXJt/aW5hemlvbmUtZS1s/YS1wdWxpemlhLWRl/bC1jdWNjaW9sby1k/ZWwtY2FuZS0yLTgw/MHg0MDAtODAweDQw/MC5qcGc">')
    res.end('<br><a href="/">Regresar</a>')
})

router.get('/abejas', (req,res) =>{
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Abejas</h1>')
    res.write('<p>Aqui amamos a las abejas. De hecho, somos apicultores</p>')
    res.write('<img src="https://imgs.search.brave.com/MZiEjVPaIpvUKVFUMsmfEG5SlkI7rliC_968DbcOruU/rs:fit:800:410:1/g:ce/aHR0cHM6Ly9kYW0u/bmdlbmVzcGFub2wu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzA1L2FiZWph/cy1kYXRvcy1zb3Jw/cmVuZGVudGVzLnBu/Zw">')
    res.end('<br><a href="/">Regresar</a>')
})
module.exports = router;