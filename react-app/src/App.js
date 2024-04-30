import './App.css';
import './responsive.css'
import useCurrencyInfo from './hooks/useCurrencyinfo';
import InputBox from './components/InputBox';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("PKR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  if (amount < 0) {
    setAmount(0)
  }
  return (
    <div>
      <div>
        <div className='mainContainer'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>
            <div>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                id="from"
              />
            </div>
            <div>
              <button
                className='swap'
                type='button'
                onClick={swap}
              >Swap</button>
            </div>
            <div>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                id="to"
              />
            </div>
            <div>
              <button type='submit'>Convert {from} to {to}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

