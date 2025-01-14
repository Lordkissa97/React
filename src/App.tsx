import TodoApp from './TodoApp.tsx';
import NavBar from './Navbar.tsx';
import imagePath from "../src/assets/logo.png";
import './Navbar.css';

function App() {
  const items = ["Home", "Support", "Service"];

  return (
    <>
      <div>
        <NavBar
          brandName="Kissa elektriske"
          imageSrcPath={imagePath}
          navItems={items}
        />
      </div>
      <div className="Todo">
        <TodoApp />
      </div>
    </>
  );
}

export default App;