import './App.css'
import Product from "./Product";
import { HiUser } from "react-icons/hi";

function App() {
  return (
    <div>
      <h1>Best Selling</h1>
      <HiUser />

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />

      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}

export default App;
