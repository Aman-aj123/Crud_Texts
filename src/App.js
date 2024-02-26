import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import './App.css';

import Navbar from "./components/navbar";
import Textarea from "./components/textarea";
import Accordion from "./components/accordion";
import Todolist from "./components/todolist";


function App() {

  const [modeValue, setMode] = useState({
    background: "white",
    color: "black"
  });

  const handleMode = (modeBg) => {
    if (modeValue.color === "black") {
      setMode({
        color: "white",
        background: modeBg,
      })
      document.body.style.background = modeBg;
    } else {
      setMode({
        color: "black",
        background: "white"
      });
      document.body.style.background = modeBg;
    }

    handleAlerts("theme changed..", "success");
    setTimeout(() => {
      handleAlerts("", "");
    }, 2000)

  }


  const [getTodos, setTodos] = useState([
    {
      title: "Buy groceries",
      des: "Milk, eggs, bread, and vegetables",
    },
    {
      title: "Complete React project",
      des: "Finish coding and add styling",
    },
    {
      title: "Exercise",
      des: "Go for a jog or hit the gym",
    },
    {
      title: "Read a book",
      des: "Choose a novel or a technical book",
    },
    {
      title: "Watch a movie",
      des: "Pick a movie you've been wanting to see",
    },
    {
      title: "Plan weekend activities",
      des: "Decide on places to visit or things to do",
    },
    {
      title: "Learn a new skill",
      des: "Take an online course or practice a new language",
    },
    {
      title: "Clean the house",
      des: "Tidy up and organize living spaces",
    },
    {
      title: "Call a friend or family member",
      des: "Catch up and stay connected",
    },
    {
      title: "Prepare a healthy meal",
      des: "Cook a nutritious and delicious dish",
    },
  ]
  );


  const startDelete = (element) => {
    const setedTodos = getTodos.filter(e => e !== element);
    setTodos(setedTodos);

    handleAlerts("Todo delted..", "success");
    setTimeout(() => {
      handleAlerts("", "");
    }, 2000)
  };


  // Showing alerts
  const [alerts, setAlerts] = useState(null);
  const handleAlerts = (alertMsg, alertType) => {
    setAlerts({
      message: alertMsg,
      type: alertType,
    });
  }

  const [currentColor, setColor] = useState("black");

  const handleCustomThemesColors = (colorName) => {
    setColor({
      color: colorName,
    });
  };




  return (
    <>
      <Router>
        
        <Navbar title="playWithTexts" searchValue="Search Do you want to do with your text.." modeValue={modeValue} handleModeClick={handleMode} alertInfo={alerts} handleCustomThemes={handleCustomThemesColors} />

        <Routes>

          <Route exact path="/textArea" element={<Textarea alertInfo={alerts} title="Enter your text and do what you want.." setColor={modeValue} alertFunction={handleAlerts} />} />

          <Route exact path="/accordion" element={<Accordion modeValue={modeValue} />} />

          <Route exact path="/todos" element={<Todolist todos={getTodos} handleDelete={startDelete} />} />

        </Routes>

      </Router>
    </>
  )
}

export default App;