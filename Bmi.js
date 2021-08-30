import React, { useState } from 'react'

function Bmi() {
    const[height,setHeight]=useState('');
    const[mass,setMass]=useState('');
    const[bmi,setBmi]=useState('');

    const calculate=(e)=>{
        e.preventDefault();
        const formValid = height > 0 && mass > 0;
        if(!formValid) { return}
        const bmi = mass/(height)**2;
        setBmi(bmi); 
    };
        return (
            <form onSubmit={calculate}>
                <h2>Bmi of person is:{bmi}</h2>
                  <div>
                 <label>Mass in Kg</label>
                 <input type="number" value={mass} onChange={(e)=>setMass(e.target.value)}/>
            </div>
            <div> 
                 <label>height in meters</label>
                 <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <button type="submit" >Calculate</button>
            
            </form>
        )
}
export default Bmi;
