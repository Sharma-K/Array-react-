import Add from "./components/Add";
import Middle from "./components/Middle";
import Remove from "./components/Remove";
import Replace from "./components/Replace";









function App() {
  let array = [1,2,3,4,5];

  return (
    <div className="App">
       <h1 className="m_tc">REST AND SPREAD OPERATOR</h1>
    <p id="m_startarray" className="m_tc m_startarray"> Array Element  : {array} </p>
      <Add />
      <Middle />
      <Remove />
      <Replace /> 
    </div>
  );
}

export default App;
