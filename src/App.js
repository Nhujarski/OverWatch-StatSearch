import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className='App'>
      <h1>Test</h1>
      <Button onClick={() => console.log('clicked!!!')} children={'Search'} />
    </div>
  );
}

export default App;
