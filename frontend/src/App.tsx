import { useState } from 'react'
import DonationPage from './pages/DonationPage.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DonationPage></DonationPage>
    </>
  )
}

export default App
