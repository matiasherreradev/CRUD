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
    <div className=" px-4 py-8 my-16 mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h1 className="font-bold text-orange-300  flex items-center justify-center mb-16 text-3xl">Modify your data</h1>
      <form className="grid gap-4 ">
        <div className="mb-4 flex flex-wrap ">
          <label
            htmlFor="formName"
            className="form-label text-white md:w-1/5 md:text-right md:pr-12 text-xl  my-auto"
          >
            Name
          </label>
          <input
            autoComplete="off"
            type="text"
            className="form-control w-full md:w-4/5 rounded-md px-2 py-1"
            id="formName"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 flex flex-wrap">
          <label
            htmlFor="formAge"
            className="text-xl  my-auto  form-label text-white md:w-1/5 md:text-right md:pr-12"
          >
            Age
          </label>
          <input
            autoComplete="off"
            type="text"
            className="form-control w-full md:w-4/5 rounded-md px-2 py-1"
            id="formAge"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Submit
        </button>
        <Link
          to="/"
          className="bg-gray-500 text-center text-white py-2 px-4 rounded w-full"
        >
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
