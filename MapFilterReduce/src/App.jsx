import products from "../utilities/products";
import names from "../utilities/array";
function App() {
  return (
    <div className="bg-gray-900 text-slate-300">
      <div>
        <h4>
          Question 1: How does the map function work in React for rendering
          lists? Can you provide and example?
        </h4>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price} - Category:{" "}
                {product.category}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h4>
          Question 2: How can you filter products with a specific category?
        </h4>
        <ul>
          {products
            .filter((product) => product.category === "Electronics")
            .map((product) => {
              return (
                <li key={product.id}>
                  <strong>{product.name}</strong> - price: ${product.price} -
                  category: {product.category}
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h4>
          Question 3: How can you display products with price greater than $20?
        </h4>
        <ul>
          {products
            .filter((product) => product.price > 20)
            .map((product) => {
              return (
                <li key={product.id}>
                  <strong>{product.name}</strong> - price: ${product.price} -
                  category: {product.category}
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h4>
          Question 4: How can you display products with price greater than $20
          of specific category?
        </h4>
        <ul>
          {products
            .filter(
              (product) =>
                product.category === "Electronics" && product.price > 20
            )
            .map((product) => {
              return (
                <li key={product.id}>
                  <strong>{product.name}</strong> - price: ${product.price} -
                  category: {product.category}
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h4>Question 5: How can you display total price of all products?</h4>
        <ul>
          <p>
            Total price: $
            {products.reduce((acc, product) => {
              return acc + product.price;
            }, 0)}
          </p>
        </ul>
      </div>
      <div>
        <h4>
          Question 6: Add discountPrice key with 10% discount to all the
          products with price more than $20 and render it
        </h4>
        <ul>
          {products
            .filter((product) => product.price > 20)
            .map((product) => {
              return {
                ...product,
                discountedPrice: product.price * (10 / 100),
              };
            })
            .map((product) => {
              return (
                <li>
                  <strong>{product.name}</strong> - discount of $
                  {product.discountedPrice} from ${product.price}
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h4>
          Question 6: How can you filter and render unique elements from an
          array using filter in React?
        </h4>
        {/* {["Alice", "Bob", "Alice", "Charlie", "Bob"]} */}
        <ul>
          {names
            .filter((name, idx) => names.indexOf(name) === idx)
            .map((name) => {
              return (
                <li>
                  <strong>{name}</strong>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
