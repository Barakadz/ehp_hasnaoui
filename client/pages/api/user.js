// pages/api/users.js

import db from '../../db'; // Assuming db.js is in the root directory

export default async function handler(req, res) {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.status(200).json(results);
  });
}
