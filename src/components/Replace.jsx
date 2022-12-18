
import React, {useState} from "react";


const Replace = () =>{

    const [array, setArray] = useState([1,2,3,4,5]);

    
function replacef(){
   
    setArray([1,2,3,4,5])
    const ele = document.querySelector('#m_repinput');
    const rep = document.querySelector('#m_repele');

    setArray(prev=>{
    const newarray = [...prev];

    for(let i=0; i<newarray.length; i++)
    {
        if(newarray[i]==ele.value)
        {
            newarray[i]=rep.value;
        }
    }
   return newarray;

})


}
    return (
        <div className="m_addinput m_tc">
        <h2>Replace Element</h2>
        <input type="number" id="m_repinput" placeholder="original element" />
        <input type="number" id="m_repele" placeholder="want to replace with" />
        <input type="button" className="m_replace" value="Replace" onClick={replacef} />
        <p id="task4" >Output : {array} </p>

    </div>
    )
}

export default Replace;