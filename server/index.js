const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'todo',
  password: 'password',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const { task, checked } = req.body;
    const result = await pool.query(
      'INSERT INTO tasks (task, checked) VALUES ($1, $2) RETURNING *',
      [task, checked]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { checked } = req.body;
    const result = await pool.query(
      'UPDATE tasks SET checked = $1 WHERE id = $2 RETURNING *',
      [checked, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
