import './App.css';
import  Nav  from "./Navbar";
import Counter from "./Counter";



function App() {

  var app = {
    name: "Expense Tracker",
    version: "v 1.0"
  }

  return (
    
    <div className="App">

      <Nav app_info = {app} />
      <br />
      <Counter />

      
        
    </div>
  );
}





export default App;
