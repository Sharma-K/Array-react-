

import React, {useState} from "react";

 
function Add (){

    const [array, setArray] = useState([1,2,3,4,5]);

    function lastf(){
        
        setArray([1,2,3,4,5]);
    const addElement = document.querySelector('#m_addNewInput');
     
    let value = addElement.value;
    
    
        setArray(prev => {
         return [...prev, value]
        })
    
        
       
        
    
    }

    function begf(){

        setArray([1,2,3,4,5]);
        const addElement = document.querySelector('#m_addNewInput');
         
        let value = addElement.value;
        
        
            setArray(prev => {
             return [ value, ...prev]
            })
        

    }
    
    return (

    <div className="m_addinput">
         <h2>Add Last and Add Begining</h2>    
    <input type="number" id="m_addNewInput" />
        <input type="button" className="m_addlast" value="Add Last" onClick={lastf} />
       <input type="button" className="m_addbegining" value="Add Begining" onClick={begf}/>
       <p id="task1">Output : {array} </p>

    </div>
    );

}

export default Add;
