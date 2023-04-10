import React, { useState } from "react";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name;
    let b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });

    history("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form className="grid gap-4">
        <div className="mb-3">
          <label htmlFor="formName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formName"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formAge" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="formAge"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Submit
        </button>
        <Link to="/" className="bg-gray-500 text-white py-2 px-4 rounded">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default Add;






/*
import React, { useState } from "react";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import '../index.css';


function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name;
    let b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });

    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
*/