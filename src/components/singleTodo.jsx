import React from 'react';
import { Todo } from '../model';
import TodoList from './TodoList';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const singleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
      setTodos(
          todos.map((todo) => 
            todo.id === id ? { ...todo, isDone: !TodoList.idDone } : todo 
        )
      )
    }

  return ( 
    <form>
        <span>{todo.todo}</span>
        <button className='btn btn-success'></button>
        <button className='btn btn-danger'></button>
        <button className='btn btn-primary' onClick={() => handleDone(todo.id)}></button>
    </form>
  );
};

export default singleTodo;
