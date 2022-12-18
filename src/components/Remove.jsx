
import React, {useState} from "react";

const Remove = () =>{
    
    const [array, setArray] = useState([1,2,3,4,5]);
    const removef = ()=> {
  
        setArray([1,2,3,4,5])
        const ele = document.querySelector('#m_removeinput');
        const idx = document.querySelector('#m_removeidx');

        setArray(prev => {
            const newarray = [...prev]
            if(ele.value){
    
                for(let i=0; i<newarray.length; i++ ){
                    if(newarray[i]==ele.value)
                    {
                        newarray.splice(i,1);
                    }
                }
            }
            else
       {
        newarray.splice(idx.value, 1);
        
       }

            return newarray;
            
        })
            
       
}

    return (
        <div className="m_addinput m_tc">
        <h2>Remove Element</h2>
        <input type="number" id="m_removeinput" placeholder="element" />
        <input type="number" id="m_removeidx" placeholder="index" />
        <input type="button" className="m_remove" value="Remove" onClick={removef} />
        <p id="task3" >Output : {array} </p>

    </div>

    )
}

export default Remove;