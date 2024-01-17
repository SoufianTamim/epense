import Balance from "./Components/Balance"
import Header from "./Components/Header"
import IncomeExpenses from "./Components/IncomeExpenses"
import TransactionList from "./Components/transactionList"
import AddTransaction from "./Components/addTransaction"
import { GlobalProvider } from "./Context/GlobalState"
import './CSS/App.css'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
