import { HiUser } from "react-icons/hi";
function App() {
const UserMenu = () => {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="24" />
      </p>
    </div>
  );
};

  return <UserMenu HiUser={HiUser} name="John Doe" />;
}

export default App;