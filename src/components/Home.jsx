import React from "react";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  function handleDelete(id) {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);

    history("/");
  }

  return (
    <>
      <div className="bg-[#393e46] px-4 py-8 my-32 mx-auto sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-black text-white uppercase text-sm leading-normal ">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Age</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr key={item.id} className=" hover:bg-gray-400 transition-all duration-200 hover:text-white border-b border-r  border-black  py-10 bg-[#f8cb63]   md:w-3/4 lg:w-2/3 xl:w-1/2 ">
                      <td className="py-3 px-6 ">{item.Name}</td>
                      <td className="py-3 px-6 ">{item.Age}</td>
                 
                      <td className="py-3 px-6 text-center">
                        <Link to={"/edit"}>
                          <button className="bg-blue-500 hover:bg-blue-700  text-white w-20 mb-2 py-2  rounded mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
                            onClick={() =>
                              handleEdit(item.id, item.Name, item.Age)
                            }
                          >
                            EDIT
                          </button>
                        </Link>
                        <button className="bg-red-500 hover:bg-red-700 text-white w-20 py-2 rounded mr-2
                        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                          onClick={() => handleDelete(item.id)}
                        >
                          DELETE
                        </button>
                      </td>
                   
                    </tr>
                  );
                })
              : <tr><td colSpan="3" className="text-center py-5">No data available</td></tr>}
          </tbody>
        </table>
        <br />
        <Link className="d-grid gap-2" to="/create">
          <button className="bg-green-500 hover:bg-green-700 text-white  py-3 px-6 rounded  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            CREATE
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;




/*import { React } from "react";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";
import '../index.css';


function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  function handleDelete(id) {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);

    history("/");
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Table  className="w-full" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            onClick={() =>
                              handleEdit(item.id, item.Name, item.Age)
                            }
                          >
                            EDIT
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
        <button className="bg-green-500 text-white py-3 px-6 rounded">
  Create
</button>
        </Link>
      </div>
    </>
  );
}

export default Home;*/
