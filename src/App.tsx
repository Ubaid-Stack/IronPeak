import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-(--color-primary) px-5 lg:px-10 h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div>
        <Hero />
      </div>
        
    </div>
  );
};

export default App;
