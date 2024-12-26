import Product from "../Product";
import { HiUser } from "react-icons/hi";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

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

const UserMenu = ({ name }) => { // Use functional component syntax
  return (
    <div>
      <p><HiUser className="my-icon" size="24" /> {name}</p>
    </div>
  );
};

export default UserMenu; // Export the functional component