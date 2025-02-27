import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todoicon.svg';
import Todoitems from './Todoitems';

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  );
  const inputRef = useRef();

  // Add task
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') return;
    const newTodo = { id: Date.now(), text: inputText, isComplete: false };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  // Delete task
  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Toggle task completion
  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  // Clear all tasks
  const clearAll = () => {
    setTodoList([]);
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white w-full max-w-lg flex flex-col p-6 min-h-[600px] rounded-2xl shadow-2xl transform transition-all hover:scale-105">
      {/* Title */}
      <div className="flex items-center mt-4 gap-3">
        <img className="w-10 animate-bounce" src={todo_icon} alt="Todo Icon" />
        <h1 className="text-4xl font-bold text-gray-800">Plan. Track. Succeed.</h1>
      </div>

      {/* Task Counter */}
      <div className="mt-4 text-gray-600">
        <p>Total Tasks: <span className="font-semibold">{todoList.length}</span> | Completed: 
        <span className="font-semibold">{todoList.filter(t => t.isComplete).length}</span></p>
      </div>

      {/* Input Box */}
      <div className="flex items-center my-6 bg-gray-100 rounded-full shadow-inner">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-12 pl-5 
          pr-2 text-gray-700 placeholder:text-gray-400 transition-all duration-300 
          focus:ring-2 focus:ring-orange-400"
          type="text"
          placeholder="Add a new task..."
          onKeyPress={(e) => e.key === 'Enter' && add()}
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-black w-24 h-12 text-white text-lg 
          font-semibold hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
        >
          Add +
        </button>
      </div>

      {/* Todo List */}
      <div className="flex-1 overflow-y-auto max-h-[350px]">
        {todoList.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 animate-fade-in">No tasks yet. Add one to get started!</p>
        ) : (
          todoList.map((item) => (
            <Todoitems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))
        )}
      </div>

      {/* Clear All Button */}
      {todoList.length > 0 && (
        <button
          onClick={clearAll}
          className="mt-4 bg-black text-white py-2 px-4 rounded-full hover:bg-blue-600 
          transition-colors duration-200 cursor-pointer"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default Todo;