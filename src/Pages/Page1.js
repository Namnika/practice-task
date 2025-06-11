import React from 'react'

const Page1 = ({ setCount, count }) => {

    return (
        <div style={{ backgroundColor: "green", height: "50vh" }}>
            <button className='bg-[#f8fafc] border-solid border-2 border-sky-500 rounded-lg py-1.5 px-3 font-medium shadow-lg text-sky-500 ' onClick={() => setCount(count + 1)}>increment</button>

        </div>
    )
}

export default Page1
