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
    <h1 className="  font-bold text-[#f8cb63]  flex items-center justify-center  text-3xl leading-tight text-center m-4">Staff List</h1>
      <div className="bg-[#393e46] px-4 py-8 my-6 mx-auto sm:w-full md:w-3/4 lg:w-2/4 xl:w-1/2">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-black text-white uppercase text-sm leading-normal ">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Age</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className=" hover:bg-gray-400 transition-all duration-200 hover:text-white border-b border-r  border-black   bg-[#f8cb63]   md:w-3/4 lg:w-2/3 xl:w-1/2 "
                  >
                    <td className="py-3 px-6 ">{item.Name}</td>
                    <td className="py-3 px-6 ">{item.Age}</td>

                    <td className="py-3 px-6 mx-2">
                      <Link to={"/edit"}>
                        <button
                          className="bg-blue-500 hover:bg-blue-700   text-white w-10/12 h-12  rounded  transition ease-in-out delay-150   px-4 my-1 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/4 xl:ml-40 ml-6"
                          onClick={(e) =>
                            handleEdit(item.id, item.Name, item.Age)
                          }
                        >
                          <span className="m-2">
                            <svg
                              className="h-6 w-6 fill-current text-white inline-block"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                          </span>
                          EDIT
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white  rounded w-10/12 px-1 ml-6 my-1 h-12
                        transition ease-in-out delay-150  inline-block sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/4 xl:ml-40"
                        onClick={(e) => handleDelete(item.id)}
                      >
                          <span className="m-2">
                        <svg
                          className="w-6 h-6 fill-current text-white inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        </span>
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-5">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <br />
        <Link className="grid gap-2" to="/create">
          <button className="bg-green-500 hover:bg-green-700 text-white  py-3 px-6 rounded  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 w-80 mx-auto">
            <span>
              <svg
                className="fill-current text-white w-8 h-8 inline-block py-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
            </span>
            CREATE
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;

