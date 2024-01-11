import React, { useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "./App.css";

function App() {

  const [contacts, setContact] =useState([])
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Tajudeen",
  //     email: "Jimoh.tajudeen1017@gmail.com",
  //   },

  //   {
  //     id: "2",
  //     name: "Jimoh",
  //     email: "Jimoh@gmail.com",
  //   }
  // ];
  return (
    <div className="ui container ">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
