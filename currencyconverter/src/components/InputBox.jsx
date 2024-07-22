import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],   // jitne bhi currencies ha unhe ak array se hi loop through krenge 
    // aur taki humara array crash na ho humlg ak empty array le liye ha yahan pe
    selectCurrency = "usd",
    amountDisable = false,     //incase user nhi dena chahta amount    ****** production grade app me ye lgta ha
    currencyDisable = false,  //ye bhi production grade app me use hota ha

    
    className = "",
}) {
   

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex     ${className}`}>   
        {/* upar humne default javascript ka css lagaya ha jahan agr user koi css apne hisab se dalna chahta ha toh dal sakta ha */}



            <div className="w-1/2">        
            {/* upar wala toh normal tailwind css ha */}

                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"



                    id={amountInputId}

                    disabled = {amountDisable}    //puch lo ki disabled ha ya nhi ye input field by default toh humne false yani diable rakha ha
                    value={amount}          // amount taken from user
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}     //yahan phle humne onamountchange ko and oprator
                    // ke saath isliuye use kia ha taki woh check kr sake ki ye exist krta ha ya ni krta

                    // phir humlog e.target.value ko Number() ke andar pas kr rha ha kyunki most of the time ye e.target.value jo ha woh string return 
                    // krta ha toh usko number me convert krne ke liye iska use krte ha 

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    


                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    

                    {/* jab bhi jsx me humlog loop laga rhe ho toh ak key pass krna jaruri ha performance optimisation ke lie
                    aur agr ni pass kre toh ak small warning ke saath kaaam toh kr jayega but performance bahut drop krega  */}

                    {currencyOptions.map((currency) => (
                        <option key={currency} value= {currency}>           
                        {currency}
                        </option>
                    ))}
                    
                
                </select>
            </div>
        </div>
    );
}

export default InputBox; 