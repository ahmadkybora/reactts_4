import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model';

// // متغییر پایین در اصل از نوع
// // یونیون تایپ هست که هم میتواند
// // رشته باید هم عدد
// let m: number | string;

// // نوع داده ای شخصی سازی شده
// type Person = {
//   name: string;
//   // علامت سوال برای اختیاری بودن است
//   // اگر نمیخواهید به آن مقدار بدهید
//   age?: number;
// }

// // نوع داده ای از نوع آرایه رشته ای
// let s: string[];

// // ناشناخته
// let c: unknown;
// // داده ای از نوع 
// // tuple
// // در اصل یک نوع آرایه است با انواه نوع داده ای
// let n: [string, number];
// let person: Person = {
//   name: "ali",
// }

const App: React.FC = () => {

  const [todo,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <span className='heading'></span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
