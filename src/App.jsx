import { useState } from 'react'
import './App.css'
import Table from './assets/table';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogIn = () => {setLoggedIn(true);}
  const handleLogOut = () => {setLoggedIn(false);}

  return (
    <>
      <div>
        {loggedIn? (
          <>
            <button class="log-button" onClick={handleLogOut}>Log Out</button>
            <Table />
          </>
        ):(
          <>
            <button class="log-button" onClick={handleLogIn}>Log In</button>
          </>
        )}
      </div>
    </>
  )
}

export default App
