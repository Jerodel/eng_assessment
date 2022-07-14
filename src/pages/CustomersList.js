import React from 'react';
import { useCustomers } from '../hooks/useCustomers';
import "./CustomerList.css";



export default function CustomersList(){
   const {error, data, loading} = useCustomers();

    if(loading) return <div>
        loading...
    </div>
    if(error) return <div>Something went wrong </div>
    return (
        <div>
            {data.customers.consumers.map(consumer => {
                return <div>
                    <p>{consumer.name}</p>
                    <p>{consumer.age}</p>
                    <p>{consumer.date}</p>
                </div>
            })}
        </div>
    )
}