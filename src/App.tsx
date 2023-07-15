import Home from "./pages/Home";
import Navbar from "./pages/Navbar"
import SignUp from "./pages/SignUp";

function App() {


  return (
    <div className="  items-center h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <Navbar />
      <Home />
      <SignUp />
    </div>
  );
}

export default App
