const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// API: Naya Notra Add Karne ke liye
app.post('/api/add-notra', async (req, res) => {
    const { name, village, cash, return_amt, type, gift_desc } = req.body;
    
    // Agar user ne return_amt nahi dala, toh cash hi save hoga
    const final_return = return_amt ? parseFloat(return_amt) : (cash ? parseFloat(cash) : 0);

    try {
        const result = await pool.query(
            'INSERT INTO contributions (guest_name, village, cash_amount, return_cash_suggested, gift_type, gift_description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name, village, cash, final_return, type, gift_desc]
        );
        res.json({ message: "Saved!", data: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Database Error");
    }
});

// API: Saari list dekhne ke liye
app.get('/api/notra-list', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contributions ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(5000, () => console.log('Server running on port 5000... 🚀'));