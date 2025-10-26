const express = require('express');

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

var app = express();

app.get('/health/db', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.send('DB connection OK');
  } catch (err) {
    console.error(err);
    res.status(500).send('DB not connected');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
