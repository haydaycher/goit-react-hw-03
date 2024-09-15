import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import initialContact from "../../contactData.json";

const getInitialValues = () => {
  const savedValues = window.localStorage.getItem("my-contacts");
  return savedValues !== null ? JSON.parse(savedValues) : initialContact;
};

const App = () => {
  const [contacts, setContacts] = useState(getInitialValues);
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      {" "}
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <SearchBox value={filter} onChange={handleFilterChange} />{" "}
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
