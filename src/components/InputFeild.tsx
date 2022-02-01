// @flow 
import React, { useRef } from 'react';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
 }

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur() 
            }}>
            <input ref={inputRef} type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
            <button className='btn btn-success'>Go</button>
        </form>
    );
};

export default InputFeild;