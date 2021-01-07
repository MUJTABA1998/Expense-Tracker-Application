import './App.css';
import  Nav  from "./Navbar";
import Expenses from "./Expenses";
import Transaction from './AddTrans'
import History from './HistoryTransactions'
import {TransactionProvider} from './TransactionContext'



function App() {

  var app = {
    name: "Expense Tracker",
    version: "v 1.0"
  }

  return (
    <TransactionProvider>
    <div className="App">

      <Nav app_info = {app} />
      <br />
      <Expenses />
      <br/>
      <br/>
      <Transaction />
      <br />
      <br />
      <History />

      
        
    </div>
    </TransactionProvider>
  );
}





export default App;
