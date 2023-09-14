import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyData, setCurrencyData] = useState([]);
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCurrencyData(data[currency]));
  }, [currency]);
  return currencyData;
}

export default useCurrencyInfo;
