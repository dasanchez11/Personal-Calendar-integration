import React, {useState, useEffect,useRef} from 'react'


function App() {
  const[counter,setCounter] = useState(0);
  const[results, setResults] = useState([]);
  const[nextPage,setNextPage] = useState(1)


  const handleClick = ()=> {
    setCounter(counter + 1)
  }
  const fetchData = useRef(()=>{});

  fetchData.current = (page=1)=> {
    fetch(`https://randomuser.me/api?page=${page}`).then(response=>response.json())
    .then((data)=>{
      const dat = data.results[0];
      setResults([...results,dat]);
      setNextPage(nextPage + 1)

    }).catch(err => console.log(err))
  }

  useEffect(()=> {
    fetchData.current()
  },[])

  return (
    <div className="App">
      <h1>Hello code Sandbox</h1>
      <h2>Start editing to see some magic happne!</h2>
      <h2>{counter}</h2>
      <button onClick={()=>handleClick()}>Add one to counter</button>
      <div>{JSON.stringify(results.[0])}</div>
      <div></div>
      <div>Espacio para no sobrepasar</div>
      <button onClick={()=>fetchData.current(nextPage)}> Fetch Data
      </button>
      {

        results.map((res,idx) =>{
        const {name,picture} = res
        return (
        <div key={idx}>
          <img src ={picture.medium} alt="" ></img>
          <div>{name.first +" "+ name.last}</div>
        </div>
      )})
      }

    </div>
  );
}

export default App;
