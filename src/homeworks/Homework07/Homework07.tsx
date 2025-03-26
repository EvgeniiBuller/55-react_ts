import Product from "../../components/Product/Product";

function Homework07 () {
    const products = [
        { name: "Apple", price: 1.5 },
        { name: "Banana", price: 1.0 },
        { name: "Orange", price: 2.0 },
      ]; 
      return  (
        <div>
          {products.map((product, index) => (
            <Product 
            key={index} 
            name={product.name} 
            price={product.price} />
          ))}
        </div>
      );   
}
export default Homework07;