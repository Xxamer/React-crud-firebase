import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import Title from "./components/Title/Title";
import Navegationbar from "./components/Navegationbar/Navbar";
import Table from "./components/Table/Table";
import ContactForm from "./components/Contact-form/Contact-form";

function App() {
  return (
    <div className="App">
      <Navegationbar/>
      <Title />
      <Container>
        <ContactForm />
        <Table />
      </Container>
    </div>
  );
}

export default App;
