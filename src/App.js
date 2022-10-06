import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';


function App() {
  const [cur1,setCur1]=useState('INR');
  const [cur2,setCur2]=useState('INR');
  const [val,setVal]=useState(0);
  const [Output,setOutput]=useState(0);
  function handleChange1(event){
    setCur1(event.target.value);
    console.log(cur1);
  }
  function handleChange2(event){
    setCur2(event.target.value);
    console.log(cur2);
  }
  function handleChange3(event){
    console.log(cur1==='INR' && cur2==='JPY');
    setVal(event.target.value);
  }
  // var Output=0;
  function fun(){
    if(cur1===cur2)alert("Both the selected currency are equal");
    else if(cur1=='INR' && cur2=='USD'){
      setOutput(val*0.012);
    }
    else if(cur1==='INR' && cur2==='JPY'){
      console.log("hi");
      setOutput(val*1.76);
    }
    else if(cur1==='INR' && cur2==='AUD'){
      setOutput(val*0.019);
    }
    else if(cur1==='INR' && cur2==='ZAR'){
      setOutput(val*0.22);
    }
    else if(cur1==='USD' && cur2==='INR'){
      setOutput(val/0.012);
    }
    else if(cur1==='USD' && cur2==='JPY'){
      setOutput(val*143.38);
    }
    else if(cur1==='USD' && cur2==='AUD'){
      setOutput(val*17.93);
    }
    else if(cur1==='JPY' && cur2==='INR'){
      setOutput(val*0.57);
    }
    else if(cur1==='JPY' && cur2==='USD'){
      setOutput(val*0.007);
    }
    else if(cur1==='JPY' && cur2==='ZAR'){
      setOutput(val*0.13);
    }
    else if(cur1==='JPY' && cur2==='AUD'){
      setOutput(val*0.011);
    }
    else if(cur1==='ZAR' && cur2==='USD'){
      setOutput(val*0.056);
    }
    else if(cur1==='ZAR' && cur2==='INR'){
      setOutput(val*4.53);
    }
    else if(cur1==='ZAR' && cur2==='JPY'){
      setOutput(val*8.00);
    }
    else if(cur1==='ZAR' && cur2==='AUD'){
      setOutput(val*0.085);
    }
    else if(cur1==='AUD' && cur2==='USD'){
      setOutput(val*0.65);
    }
    else if(cur1==='AUD' && cur2==='INR'){
      setOutput(val*53.21);
    }
    else if(cur1==='AUD' && cur2==='JPY'){
      setOutput(val*93.54);
    }
    else if(cur1==='AUD' && cur2==='ZAR'){
      setOutput(val*11.74);
    }
  }
  return (
        <div>
        <label for="First_Currency">First Currency </label>
        <select id="sel1"  onChange={handleChange1} >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="ZAR">ZAR</option>
        </select>
        <label for="Second_Currency"> Second Currency </label>
        <select id="sel2" onChange={handleChange2} >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="ZAR">ZAR</option>
        </select>
        <br/>
        <input type="number" onChange={handleChange3}/>
        <br/>
        <button onClick={fun}>Convert</button>
        <p>{Output}</p>
    </div>
  )
};
export default App;
