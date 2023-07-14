

export default function SelectedContact({ selectedContact, setSelectedContact }) {
  return (
    <>
      <table className="table" >
        <thead>
          <tr>
            <th className="header" colSpan="7">
              <div className="flex justify-between">
                  <span className="text-xl">Selected Contact</span>
                  <span className="pt-2" onClick={() => { setSelectedContact(null) }}>Return</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="rowTitle">
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Company</td>
            <td>Username</td>
            <td>Website</td>
          </tr>
          <tr className="tableRow">
            <td>{selectedContact.name}</td>
            <td>{selectedContact.email}</td>
            <td>{selectedContact.phone}</td>
            <td>{`${selectedContact.address.street} ${selectedContact.address.suite} ${selectedContact.address.city} ${selectedContact.address.zipcode}`}</td>
            <td>{selectedContact.company.name}</td>
            <td>{selectedContact.username}</td>
            <td>{selectedContact.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}