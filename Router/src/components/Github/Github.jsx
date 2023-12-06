import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://github.com/its-himanshu-13')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    },[])

    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Public Repositories : {data.public_repos}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}

export default Github


