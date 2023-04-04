// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import "./style.css"

function App() {

  const [getData,setGetData] = useState([])

  useEffect(()=>{

    const handleFetchGitHub =async ()=>{

      //using try cath
      // try{
      //   let getDataApi = await axios.get("https://api.github.com/users/Muhammad-Bilal-ode/repos")
      //   console.log(getDataApi) 
      //   if(getDataApi.length<1){
      //     console.log("User Not Found")
      //   }
      //   else{
      //            setGetData(getDataApi)
      //            console.log(getData)
      //           }
      //         }
      // catch(err){
      //   console.log(err)
      // }
      // console.log(getData)
      
      //using .then .catch
      
      let getDataApi = await axios.get("https://api.github.com/users/Muhammad-Bilal-code/repos")
      .then((val)=>{
          // console.log(val)
          setGetData(val.data)
          // console.log(getData)
        }).catch((err)=>{
            console.log("User Not Found : " + err)
          })
        }
        handleFetchGitHub()
      },[])



  
  return (
    <div className="App">
        <h2>My Github Profile</h2>
        <div className="card-main">
        {getData.map((val)=>{
          // console.log(val)
          // console.log(val.name)
          // console.log(val.html_url)
          return (
            <div className="card-item" key={val.id}>
              <h2>{val.name}</h2>
              <a href={val.html_url} target='_blank'>Go to Repo</a>
            </div>
            )
        })}
        </div>
       
    </div>
  );
}

export default App;
