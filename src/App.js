import Header from "./components/header";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div className="app flex">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:overflow-hidden">
        <Header />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
