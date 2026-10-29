import { useState } from "react";
import "./App.css";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Nike Air Max სპორტული ფეხსაცმელი",
    category: "ფეხსაცმელი",
    image: "https://unsplash.com",
    oldPrice: 299,
    currentPrice: 209,
    discount: "30%",
    inStock: true,
  },
  {
    id: 2,
    title: "Nike Air Max სპორტული ფეხსაცმელი2",
    category: "ფეხსაცმელი",
    image: "https://unsplash.com",
    oldPrice: 199,
    currentPrice: 199,
    discount: false,
    inStock: true,
  },
];

function App() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? Number(savedCount) : 0;
  });

  function addNumber() {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  }

  return (
    <>
      <div className="container">
        <button>-</button>
        {/* <div>0</div> */}
        <div>{count}</div>
        <button onClick={addNumber}>+</button>
      </div>
      <div className="products-grid">
        {products.map((product) => {
          return <ProductCard key={product.id} item={product} />;
        })}
      </div>
    </>
  );
}

export default App;
