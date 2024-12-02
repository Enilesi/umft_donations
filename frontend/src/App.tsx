import React from "react";
import { useState } from 'react'
import DonationPage from './pages/DonationPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DonationPage></DonationPage>
    </>
  )
}

export default App
