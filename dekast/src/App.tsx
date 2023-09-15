import { useState } from 'react'
import './App.css'

function App() {
  const [klantnummer, setKlantnummer] = useState("")

  return (
    <>
      <div className="background">
        <div className="block">
          <div className="text">
            <p>Welkom bij "De Kast"</p>
          </div>
          <div className="inloggen">
            <div className="text_login">
              <p>Voer uw klantnummer in:</p>
            </div>

            <div className="input_klantnummer">
              <input className="input" type="text" />
            </div>

            <div className="submit_block">
              <input className="submit" type="submit" value="Aanmelden"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
