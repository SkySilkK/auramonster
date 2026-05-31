import { useState } from 'react'
import './App.css'

import ShoppingList from './components/ShoppingList.jsx'
import NatsukiDaniel from './components/NatsukiDaniel.jsx'

const user = {
  "name" : "Natsuki Daniel",
  "age" : 21,
}

const name = user.name


{/*
function ConditionalRender(){
  let toShow;
  let name = user.name;
  if (name==="Natsuki Daniel"){
    toShow = <div>You are an amazing larper Natsuki Daniel</div>;
  } else {
    toShow = <div>Watch Rezero</div>;
  }
  return(
    <div>{toShow}</div>
  )
}
*/}
const anime = [
  {id: 1, title: "rezero"},
  {id: 2, title: "gintama"},
  {id: 3, title: "hxh"},
]

function ConditionalRender(){
  return(
    <div>
      { name === "Natsuki Daniel" ? 
        ( <div> You're an Amazing Larper Natsuki Daniel</div>
        ) : (
          <div>Watch rezero</div> 
        )}
    </div>
  )
}

function DirectRender(){
  return(
    <div>{name==="Natsuki Daniel" && "Happy Birthday Daniel"}</div>
  )
}





function App() {
  return (
    <>
      <h1>Natsuki Daniel</h1>
      <p>Hello CI/CD!</p>
      <p><b>Walking stairs with Aura</b></p>
      <p>{user.name}</p>
      <NatsukiDaniel />
      <ConditionalRender />
      <DirectRender />
      <ShoppingList />
    </>
  )
}

export default App
