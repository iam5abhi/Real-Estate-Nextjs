import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import Link from 'next/link';

const index = () => { 
    const [properties, setProperties] = useState(null);

    const getPropertiesData = async () => {
        const data = await Axios.get("http://localhost:7000");
        setProperties(data.data)
    };

    useEffect(() => {
        getPropertiesData()
    }, []);
  return (
        <>
       <div className="px-2 py-4 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-3 gap-4 rounded px-6 py-6">
                {!properties?null:properties.data.map(datas=>(
                    <div className="text-center">
                    <Link href={`/properties/${datas._id}`}><span className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{datas.title}</h5>
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">{datas.description}</h5>
                        <button type="button" className="text-white text-end bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">View More</button>
                    </span></Link>
                    </div>
                )
                )}
            </div> 
        </div>
        </>
        
  )
}

export default index