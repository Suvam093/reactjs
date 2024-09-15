import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())

    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     }
            
    //     )
    // }, [])
    return (
        <div className='text-center text-white text-3xl p-4 m-10 bg-gray-600'>Github followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="Git profile" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}
