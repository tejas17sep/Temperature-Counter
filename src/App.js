import React, { useState } from 'react'

const App = () => {


const [totalCount,setTotalCount] = useState(10) ;
const [tempChange,setTempChange] = useState("cold")

const onIncTemp = () => {
 const newTemp = (totalCount  + 1);
 if(newTemp>=15){
  setTempChange("hot")}

   setTotalCount(newTemp);
}

const onDecTemp = () => {
  const newTemp = (totalCount  - 1);
  if(newTemp<15){
    setTempChange("cold")

  }
  setTotalCount(newTemp);
}


return (
    <div className="app-container">

      <div className="temperature-display-container">

        <div className={`temperature-display ${tempChange}`}>{totalCount}°C</div>

      </div>
      <div >
      <button  className='button' onClick={() => onIncTemp() }>
          +
      </button>
      <button  className='button' onClick={() => onDecTemp() }>
        -
      </button>
      </div>
  
    </div>
  );
}

export default App;
