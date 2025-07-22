import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ tittle }) => {
  return (
    <div className="card">
      <h2>{tittle}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card tittle="Star Wars" rating={5} isCool={true} />
      <Card tittle="Avatar" />
      <Card tittle="The Lion King" />
    </div>
  );
};

export default App;
