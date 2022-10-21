import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import { FieldValue } from "firebase/firestore";
import { db } from './firebase_config';




function App() {
  const [todoInput, setTodoInput] = useState("");
  function addTodo(e) {
    e.preventDefault();
    db.collection("tasks").add({
      inprogress: true,
      timestamp: FieldValue.serverTimestamp(),
      todo: todoInput,
    })

    setTodoInput("")
  }
  return (
    <div className="App" >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>ToDo List</h1>
        <form>
          <TextField id="standard-basic"
            label="Write a todo"
            variant="standard"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{ maxWidth: "300px", width: "90vw" }}
          />
          <Button type='submit' variant="outlined" onClick={addTodo}
           style={{ display: "none" }}
          >Outlined
          </Button>
        </form>
      </div>
    </div>
  );
}
export default App;
