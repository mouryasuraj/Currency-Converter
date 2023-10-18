import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import SwapBtn from "./SwapBtn";
import Convert from "./Convert";
function MainContainer() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // function to swap the amount and currencyType
  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  // function to convert the amount
  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="bg-sky-100 p-4 rounded-md z-10">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* input */}
        <div className="relative">
          <InputBox
            amount={amount}
            label="from"
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
          />
          <InputBox
            amount={convertedAmount}
            label="to"
            selectCurrency={to}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            disabledConvertedAMount
          />
          <Convert from={from} to={to} convertBtn={convert} />
          <SwapBtn swapBtn={swap} />
        </div>
      </form>
    </div>
  );
}

export default MainContainer;
