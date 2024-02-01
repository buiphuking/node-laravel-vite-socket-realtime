/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

const App16 = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // Initial API call
    axios
      .get("http://127.0.0.1:8000/api/broadcast")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Listen for database update event
    socket.on("connection", (event) => {
      // Handle the database update event
      console.log("Record updated:", event.updatedRecord);

    });

    socket.on("server-message", (server) => {
      console.log(server);
      // recallApi();
    });

    socket.on("test-data", (test) => {
      console.log("test-data");
      setData(test);
    });

  }, []); // Empty dependency array means this effect runs once after the initial render





  return <div>App16</div>;
};

export default App16;
