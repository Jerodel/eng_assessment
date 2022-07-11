
import './App.css';

const buttons = ["White", "Yellow", "Green", "Document"];

const market =[
  {
    date: "02- June - 2022",
    products: [
      {
        id: "1",
        name: "iPhone 13",
        color: "white",

      },
      {
        id: "2",
        name: "iPhone 8",
        color: "black",
      },      
      {
        id: "3",
        name: "iPhone 10",
        color: "yellow",
      }      
    ],
  },
  {
    date: "25th-Aug. 2021",
    products: [
      {
        id: "4",
        name: "Oppo xl",
        color: "black"
      }
    ]
  }
]
function App() {
  return (
    <div className="App">
     <header>
      <div className = "topContainer">
        <div className="inputDiv">
        <input className="inputField" type="text" placeholder="Search"/>
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
          {market.map((item) => {
           return <div className ="card" key={item.index} > 
             
               <p>{item.date}</p> 
               <p>{item.products.map((product) => (
                <p>{product.name}</p>
               ))}</p>

             
            </div>
          })}
         
        </div>
    </div>
  );
}

export default App;
