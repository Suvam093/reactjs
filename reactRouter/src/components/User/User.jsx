import React from 'react'
import { useParams } from 'react-router-dom'

// Using this user id concept we can take dynamic data from the user
// this help us to display that data or we can make a call from the data base using that data


function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-600 p-4 m-20 text-center text-white text-3xl jc-center'>User: {userid}</div>
    )
}

export default User
