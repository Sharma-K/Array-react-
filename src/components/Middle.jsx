
import React, {useState} from "react";
const Middle = ()=> {
   
    const [array, setArray] = useState([1,2,3,4,5]);
function middlef()
{
    setArray([1,2,3,4,5])
    const ele = document.querySelector('#m_addinputele');
    const idx = document.querySelector('#m_addinputidx');


    setArray(prev => {
        const newarray = [...prev];
   
        newarray.splice(idx.value, 0, ele.value);
   
        return newarray
    })
    
    

}
    return(
        
    <div className="m_addinput m_tc">
    <h2>Add Element In Middle At Index Position</h2>
    <input type="number" id="m_addinputele" placeholder="element"/>
    <input type="number" id="m_addinputidx" placeholder="index"/>
    <input type="button" className="m_addidx" value="Add" onClick={middlef} />
    
    <p id="task2" >Output : {array} </p>

</div>
    )
}

export default Middle;