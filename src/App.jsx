import { useState } from "react";

import { Input } from "./Components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setAmount(convertedAmount);
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  console.log(convertedAmount);
  console.log(amount);
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 h-screen flex justify-center items-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/164637/pexels-photo-164637.jpeg?auto=compress&cs=tinysrgb&w=600')]"></div>
        <div className="w-1/2  backdrop-blur-sm bg-black/10 flex justify-center align-center">
          <div className="w-full mx-auto border border-gray-60 backdrop-blur-sm bg-white/30 rounded-lg p-4 flex justify-center align-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Input
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onAmountChange={(amount) => {
                    setAmount(amount);
                  }}
                  onCurrencyChange={(currency) => {
                    setFrom(currency);
                  }}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-500 text-white px-2 py-0.5 text-center"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <Input
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setTo(currency);
                  }}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rouded-lg">
                {" "}
                Convert from {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
