import './App.css';
import Store from "./store/Store";
import MainComponent  from "./components/main/MainComponent"

function App() {
  return (
    <Store>
        <MainComponent/>
    </Store>
  );
}

export default App;
