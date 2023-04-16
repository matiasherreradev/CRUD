import React, { useState, useEffect } from "react";
import Employees from "./Employees";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let employeesCopy = Employees.slice();
    // OR let employeesCopy = [...Employees];

    var index = employeesCopy
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    let employee = employeesCopy[index];
    employee.Name = name;
    employee.Age = age;

    localStorage.setItem("Employees", JSON.stringify(employeesCopy));
    history("/");
  };

  return (
    <div className="bg-[#393e46] my-32 flex justify-center items-center">
      <form
        className="w-2/3 md:w-2/5 p-8 bg-[#f8cb63] rounded-lg shadow-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Edit Employee</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
           pattern="[A-Za-z ]+" required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            min="18"
            max="90"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;

