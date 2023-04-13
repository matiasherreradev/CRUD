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
    <div className="bg-[#f8cb63] px-8 py-8 my-16 mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h1 className="font-bold #393e46  flex items-center justify-center mb-16 text-3xl">
        Create a new data entry
      </h1>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="formName"
            className="form-label text-black md:w-1/5 md:text-right md:pr-12 text-xl mb-2  "
          >
            Name
          </label>
          <input
            pattern="[A-Za-z\s]+"
            required
            autoComplete="off"
            type="text"
            className="form-control w-full  rounded-md px-2 py-1 mb-2"
            id="formName"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            title="Please enter your name"
          />
        </div>
        <div className="mb-6 ">
          <label
            htmlFor="formAge"
            className="text-xl   form-label text-black md:w-1/5 md:text-right md:pr-2"
          >
            Age
          </label>
          <input
            min="18"
            max="99"
            required
            autoComplete="off"
            type="number"
            className="form-control w-full  rounded-md px-2 py-1"
            id="formAge"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-150 hover:bg-blue-600  text-white py-2 px-4 rounded w-full"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Submit
        </button>
        <Link
          to="/"
          className="bg-red-500 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-150  hover:bg-red-600   text-white py-2 px-4 rounded w-full"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
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
