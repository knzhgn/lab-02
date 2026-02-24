import React from 'react';

// Массив данных для отображения (Task 2)
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

function App() {
  return (
    // Используем фрагмент <></> чтобы не было лишних <div> в DOM (Task 1)
    <>
      <header>
        <h1>Fragment Layout</h1>
      </header>
      
      <main>
        <p>This layout uses React Fragments to avoid "div soup".</p>
        
        {/* Рендерим список через .map() (Task 2) */}
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </main>

      <footer>
        {/* Вывод количества элементов через выражение (Task 3) */}
        <p>Total items: {items.length}</p>
      </footer>
    </>
  );
}

export default App;