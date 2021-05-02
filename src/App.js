
import './App.css';
import React from 'react';

import Pakistan from './components/Pakistan';
import Punjab from './components/Punjab'
import Sindh from './components/Sindh'
import Kpk from './components/Kpk'
import GilgatBaltistan from './components/GilgatBaltistan'
import Balochistan from './components/Balochistan'
import flag from './flag.jpg'
import punjabpic from './components/Images/punjabpic.png';
import Footer from './components/Footer'
import { Navigation } from './components/Navigation'

function App() {
 var count=false;
  const obj = {
    btn1: { name: "Punjab", func: 
    function () {
count=true;
alert("hello SindhAction");
func();
    } 
},
    btn2: { name: "Sindh", func: function () { alert("hello SindhAction"); } },
    btn3: { name: "Kpk", func: function () { alert("hello kpkAction"); } },
    btn4: { name: "Gilighigit", func: function () { alert("hello GilighigitAction"); } },
    btn5: { name: "Balochistan", func: function () { alert("hello BalochistanAction"); } },
    btn6: { name: "Kashmir", func: function () { alert("hello KashmirAction"); } },
  };
 function func() {
 {count==true? <Pakistan img={flag} /> : <Punjab img2={punjabpic} />}
 }

  return (
    <div className="App">

      <Pakistan img={flag} /> 
      
      {
        Object.keys(obj).map(key=>
          <Navigation btn_name={obj[key].name} btn_function={obj[key].func} />
                
        )
      }
    
 
     
    <Footer />
    <Punjab img2={punjabpic}/>
      <Sindh />
      <Balochistan />
      <Kpk />
      <GilgatBaltistan />
     
    </div>
  );
}

export default App;
