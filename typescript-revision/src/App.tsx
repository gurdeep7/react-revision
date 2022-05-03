import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo.model";
//any type
// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// let personName: unknown;
// let printName: (name: string) => void;
// // void returns undefined
// //never return nothing

// //interface use to create object
// interface Person {
//   name: String;
//   age: number;
// }
// interface Guy extends Person {
//   profession: string;
// }
// let person: Person;

// person = {
//   name: "gurdeep",
//   age: 20,
// };
// let guy: Guy = {
//   name: "jdkx",
//   age: 20,
//   profession: "engineer",
// };

// type x = {
//   a: string;
//   b?: number;
// };

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("")
    }
  };

  return (
    <div className="App">
      Todo List
      <div>
        
        <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
        {/* {todos.map((e)=>(
        <li>{e.todo}</li>
        ))} */}
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
