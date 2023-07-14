import { useState } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';

function App() {

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {!selectedContact ? <ContactList setSelectedContact={setSelectedContact} /> : <SelectedContact selectedContact={selectedContact} setSelectedContact={setSelectedContact} />}
    </>
  )
}

export default App
