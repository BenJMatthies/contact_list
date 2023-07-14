import React, { useState, useEffect } from "react"; 
import ContactRow from "./ContactRow";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "lil-smart-@$$@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "prissy-poo@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "soccerball@droids.com" },
    { id: 4, name: "IG-88", phone: "999-999-9999", email: "bity-yoda-killa@droids.com" },
  ];

export default function ContactList({setSelectedContact}) { 

    const [contacts, setContacts] = useState(dummyContacts);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                );
                const result = await response.json();
                setContacts(result);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    },[])


    return ( 
        <table className="table">
          <thead>
            <tr>
              <th className="header" colSpan="3" >
                <div className="flex justify-between">
                    <span className="text-xl">Contact List</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="rowTitle">
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               // Map over data here
               contacts.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} setSelectedContact={setSelectedContact}/>
               })
             }
          </tbody>
        </table>
    ); 
}