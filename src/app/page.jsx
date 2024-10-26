import { Card } from "./components/card";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const { products } = data;

  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div key={product.id}>
                <Card products={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}