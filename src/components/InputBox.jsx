import { useId } from "react";

function InputBox({
  label = "from",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  disabledConvertedAMount = false,
}) {

    const uID = useId();

  return (
    <div className="flex flex-wrap bg-black/10 rounded-sm p-3 mb-3">
      {/* input */}
      <div className="w-1/2">
        <label
          htmlFor={uID}
          className="inline-block mb-4 capitalize text-black/50"
        >
          {label}
        </label>
        <input
        id={uID}
          type="number"
          value={amount}
          className="w-full outline-none bg-transparent placeholder:text-black"
          placeholder="0"
          disabled={disabledConvertedAMount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      {/* currency */}
      <div className="w-1/2 text-right justify-end">
        <p className="mb-4 capitalize text-black/50">CurrencyType</p>
        <select
          className="cursor-pointer bg-transparent"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => {
            return <option key={currency} value={currency}>{currency}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
