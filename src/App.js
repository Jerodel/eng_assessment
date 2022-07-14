
import React, {useState} from 'react';
import { gql, useLazyQuery } from "apollo/client";
import './App.css';

const GET_CONSUMER = gql`
queryGetConsumer($name: string!){
  consumer(filter: {
    name: "David Bello"
  }) {
    customers
  }
}
`
function App() {
  const [name, setName ] = useState("");
  const [getName, {loading, error, data, called}] = useLazyQuery(GET_CONSUMERS, {
    variables: {
      name
    }
  })
  return (
    <div className="App">
     <header>
      <div className = "topContainer">
        <div className="inputDiv">
        <input className="inputField" type="text" value = {name} 
        onChange = {(e) => setName(e.target.value)}
        placeholder="Search"/>
        </div>

        <div className = "filter" style={{marginTop: "1em"}}>

        {buttons.map((item) => 
       <button
        key={item.index}>
          {item}

    </button> )}
        </div>
        </div>
    
     </header>

        <div className="elementContainer">
          {customers.map((item) => {
           return <div className ="card" key={item.index} > 
             
               <p>{item.date}</p> 
               <p>{item.customer.map((product) => (
                <p>{product.name}</p>
               ))}</p>

             
            </div>
          })}
         
        </div>
    </div>
  );
}

export default App;
