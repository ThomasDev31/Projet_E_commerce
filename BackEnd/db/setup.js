const db = require('./db');

db.serialize(() => {
  // Table users
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);

  // Table category
  db.run(`
    CREATE TABLE IF NOT EXISTS category (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  // Table products
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      img TEXT,
      price REAL NOT NULL,
      category_id INTEGER,
      FOREIGN KEY (category_id) REFERENCES category(id)
    )
  `);

  // Table orders
  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Table order_products
  db.run(`
    CREATE TABLE IF NOT EXISTS order_products (
      order_id INTEGER,
      product_id INTEGER,
      PRIMARY KEY (order_id, product_id),
      FOREIGN KEY (order_id) REFERENCES orders(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    )
  `, (err) => {
    if (err) {
      console.error('❌ Erreur création tables :', err.message);
    } else {
      console.log('✅ Toutes les tables ont été créées avec succès.');
    }
  });
});