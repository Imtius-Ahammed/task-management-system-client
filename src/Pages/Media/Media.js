import { Accordion, Button, Card } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Media = () => {
  const { user } = useContext(AuthContext);
  const [allData, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://task-management-system-server.vercel.app/allTasks/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold p-4">This is Media Routes </h3>

        {allData.map((data) => (
          <Accordion
            className="container mx-auto bg-sky-300   my-10 "
            flush={true}
            data={data._id}
            alwaysOpen={true}
          >
            <Accordion.Panel>
              <Accordion.Title className="text-white">
                <div className="flex justify-center">
                  <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
                    {data.taskTitle}
                  </h5>
                </div>
              </Accordion.Title>
              <Accordion.Content className="bg-sky-200">
                <div>
                  <Card>
                    <div className="flex  ">
                      <div className="w-1/2">
                        <img className=" mx-auto" src={data.img} alt="" />
                      </div>

                      <div className="w-full">
                        <h2 className="text-3xl font-bold">Task Description</h2>
                        <textarea
                          style={{ width: "100%" }}
                          name=""
                          id=""
                          cols="70"
                          rows="10"
                          disabled
                          className="border-0"
                        >
                          {data.description}
                        </textarea>
                        <div className="flex justify-center gap-2">
                          <Link to="/completedTask">
                            {" "}
                            <Button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                              Completed Task
                            </Button>
                          </Link>
                          <Link to={`/update/${data._id}`}>
                            {" "}
                            <Button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                              Update
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Media;
