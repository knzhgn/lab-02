import Card from './Card';

const products = [
  { id: 101, name: "Laptop", price: 999 },
  { id: 102, name: "Mouse", price: 25 },
  { id: 103, name: "Keyboard", price: 50 }
];

function App() {
  return (
    <>
      <h2>Product Catalog</h2>
      {/* Мапим продукты, используя наш компонент Card */}
      {products.map((product) => (
        <Card key={product.id} title={product.name}>
          <p>Price: ${product.price}</p>
        </Card>
      ))}
    </>
  );
}