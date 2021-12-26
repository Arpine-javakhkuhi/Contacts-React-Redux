import Header from "./components/Header/Header";
import ContactsForm from "./components/Contacts/Form/ContactsForm";
import ContactsList from "./components/Contacts/List/ContactsList";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ContactsList />
      <ContactsForm />
    </div>
  );
}

export default App;
