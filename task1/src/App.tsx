import React from 'react';

// Данные для списка (Task 2) [cite: 411]
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

function App() {
  return (
    // Используем фрагмент, чтобы не создавать лишних div в DOM (Task 1) [cite: 389, 407]
    <>
      <header>
        <h1>Fragment Layout & List Mapping</h1>
      </header>

      <main>
        <h2>Item List</h2>
        <ul>
          {/* Мапим массив в список с ключами (Task 2)  */}
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </main>

      <footer>
        {/* Выражение для подсчета длины массива (Task 3)  */}
        <p>Total: {items.length} items</p>
        <p>© 2026 Nurgazy Lab 02</p>
      </footer>
    </>
  );
}

export default App;