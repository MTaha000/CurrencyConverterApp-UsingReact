import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    let [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/d0bf2f6b8950c0e53ae8c267/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;