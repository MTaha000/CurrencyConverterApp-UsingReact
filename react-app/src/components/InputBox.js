import React from 'react'

function InputBox({
    label = '',
    amount = '',
    onAmountChange = '',
    onCurrencyChange = '',
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false,
    id
}) {
    return (
        <div className='input-box'>
            <div className='left-box'>
                <label htmlFor={id}>
                    {label}
                </label>
                <input
                    id={id}
                    type='number'
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={Math.round(amount * 100) / 100}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                >
                </input>
            </div>
            <div className='right-box'>
                <p>Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    )
}
export default InputBox;