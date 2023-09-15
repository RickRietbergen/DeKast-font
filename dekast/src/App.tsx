import { useState } from 'react'
import { API_URL } from "./constants/links";
import './App.css'

function App() {
  const [klantnummer, setKlantnummer] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleReport = () => {
    fetch(`${API_URL}Entree/Aanmelden`, {
      method: "POST",
      body: JSON.stringify({
        klantnummer,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return new Promise((resolve) => {
          if (response.ok) {
            response.json().then((json) =>
              resolve({
                status: response.status,
                ok: response.ok,
                json,
              })
            );
          } else {
            resolve({
              status: response.status,
              ok: response.ok,
              json: response,
            });
          }
        });
      })
      .then((result) => {
        const { json, ok } = result as { json: any; ok: any };
        console.log(json);
        if (!ok) {
          setButtonDisabled(false);
        }
        if (ok) {
          setButtonDisabled(true);
          window.location.href = "/loggedin";
        }
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
