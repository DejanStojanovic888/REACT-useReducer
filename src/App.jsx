import { Outlet } from "react-router"
import { useReducer, useState } from "react"
import fake_data from "../fake_data"
import  receptiReducer from "./reducers/receptiReducer" 

function App() {
  const [recepti, dispatch] = useReducer(receptiReducer, fake_data)
  return (
    <div>
      <Outlet context={{ recepti, dispatch }} />
    </div>
  )
}

export default App