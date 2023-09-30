import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;
