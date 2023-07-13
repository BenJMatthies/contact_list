import { useState } from 'react'
import ContactList from './components/ContactList'

function App() {

  const [selectedContactID, setSelectedContactID] = useState(null);
  console.log(selectedContactID)
  return (
    <>
      {!selectedContactID ? <ContactList setSelectedContactID={setSelectedContactID}/> : null}
    </>
  )
}

export default App
