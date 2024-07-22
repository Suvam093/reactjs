import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})  //here we are passing an empty object so that even if we don't receive the data the 
        // loop that we are using won't crash the site as it will have an empty object there



    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        //above fetch call even though its an API call it will give us a string which looks like json but its not so we'll have to convert it to json first
        
        .then((res) => res.json())         //chaining 
        .then((res) => setdata(res[currency]))
        console.log(data)

    }, [currency])   // yaham humlog currency pass kr rhe ha kyunki jab bhi currency change krenge tab khud hi woh uss currency ke hisaab
    // se update ho jana chahiye humara values

    console.log(data)
    return data
}

export default useCurrencyInfo;