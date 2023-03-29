//import helloWorld from "./components/HelloWord"

//import Usuario from "./components/Usuario/Usuario"

import {useEffect, useState} from "react"
import Loader from "./components/Loader/Loader.module.css"

 useEffect( ()=> {
  console.log("1+1")


 })

function App() {
  const [imagem, setImagem] =  useState

  useEffect( () =>{
    getImagem()
  },[])


  const getImagem = async () => {

    const response = await fetch("https://dog.ceo/api/breeds/image/random")

    const data = await response.json()

    setImagem(data)

  }



  return (

    
    <div className="App">
      { /*typeof(imagem) ---"underfined" ?
      <Loader/>

        :


        <img src={imagem.mensage}></img>
      }*/ }
    <Loader/>



    </div>
  )
    }

export default App
