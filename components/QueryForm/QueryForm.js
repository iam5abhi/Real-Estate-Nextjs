import React, { useState } from 'react'
import Axios from 'axios';

const QueryForm = () => {
    const [queryData,setQueryData]=useState()


    const OnChangeHandler =(event)=>{
        setQueryData((pre)=>({
            ...pre,
            [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = await Axios.post(`http://localhost:7000/add-client-info`,queryData);
        console.log(data)
    }
        
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-10 h-screen sticky top-0  -mt-32  hidden lg:block">
    <div className="w-full bg-white shadow-2xl flex flex-col my-10 p-6 rounded">
        <form onSubmit={handleSubmit}>
            <p className="text-2xl text-gray-800 font-semibold pb-1">Let us call you!</p>
            <p className="text-sm font-normal pb-5 text-gray-400">To help you choose your property</p>
            <div className="mb-4">
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                </label>
                <input type="text" id="name" name='name' onChange={OnChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="name">
                    Your Email
                </label>
                <input type="email" id="email" name='email' onChange={OnChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
            </div>
            <div className="mb-8">
                <label className="block text-gray-800 text-sm font-medium mb-2" htmlFor="name">
                    Your Number
                </label>
                <input type="text" id="phone_name" name='phoneNumber' onChange={OnChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your number" required />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" defaultValue className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-400">I consent to having
                    this website store
                    my submitted information so they can respond to my inquiry. <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and
                        conditions</a>.</label>
            </div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-500 py-2 px-4 text-sm font-medium text-white ">
                <a href>Submit</a>
            </button>
            <br />
        </form></div>
    <div>
    </div>
</aside>
  )
}

export default QueryForm