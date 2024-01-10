import React from "react";
import ContactCard from "./ContactCard";

const AddContactList = (props) => {

  const renderContactList = props.contacts.map((contact) => {
    return (
        <ContactCard />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default AddContactList;
