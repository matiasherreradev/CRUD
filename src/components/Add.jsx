import React, { useState } from "react";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el nombre contenga sólo letras
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert("Please enter a valid name containing only letters.");
      return;
    }

    // Validar que la edad sea un número entre 18 y 65
    if (isNaN(parseInt(age)) || parseInt(age) < 18 || parseInt(age) > 65) {
      alert("Please enter a valid age between 18 and 65.");
      return;
    }

    // Generar un ID único
    const ids = uuid();
    const uniqueId = ids.slice(0, 8);

    // Agregar el nuevo empleado a la lista
    Employees.push({ id: uniqueId, Name: name, Age: age });

    // Navegar de vuelta a la página de inicio
    history("/");
  };

  return (
    <div className="bg-[#f8cb63] px-8 py-8 my-16 mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h1 className="font-bold #393e46  flex items-center justify-center mb-16 text-3xl">
        Create a new data entry
      </h1>
      <form className="grid gap-4">
        <div>
          <label
            htmlFor="formName"
            className="form-label text-black md:w-1/5 md:text-right md:pr-12 text-xl   "
          >
            Name
          </label>
          <input
            pattern="[A-Za-z\s]+"
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
            max="65"
            autoComplete="off"
            type="number"
            className="form-control w-full  rounded-md px-2 py-1"
            id="formAge"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <Link to="/" className="d-grid gap-2">
          <button
            className="bg-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-150 hover:bg-blue-600  text-white py-2 px-4 rounded w-full"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Submit
          </button>
        </Link>
        <Link to="/" className="d-grid gap-2">
          <button
            className="bg-red-500 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-150  hover:bg-red-600   text-white py-2 px-4 rounded w-full"
            onClick={() => {
              setName("");
              setAge("");
            }}
          >
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Add;
