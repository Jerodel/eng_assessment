import React from 'react';
import { useCustomers } from '../hooks/useCustomers';

export default function Character(){
    const {data, error, loading } = useCustomers();

    if(loading) return <div>loading...</div>
    if(error) return <div>Something went wrong </div>

    return <div className="customer">
        <h1>{data.customer.name}</h1>
        <h1>{data.customer.name}</h1>
        <h1>{data.customer.name}</h1>
        
        </div>
}