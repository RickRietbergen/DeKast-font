import { useState } from 'react'
import { API_URL } from "./constants/links";
import './App.css'

function App() {
  const [klantnummer, setKlantnummer] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleReport = () => {
    fetch(`${API_URL}Entree/Aanmelden?klantnummer=${klantnummer}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          setButtonDisabled(true);
          window.location.href = "/dashboard";
        } else {
          setButtonDisabled(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

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
              <input className="input" type="text" onChange={(e) => {setKlantnummer(e.target.value)}}/>
            </div>

            <div className="submit_block">
              <button className="submit" type="submit" onClick={handleReport} disabled={buttonDisabled}>Aanmelden</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
