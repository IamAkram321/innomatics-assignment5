import React from 'react';
import tick from '../assets/tick.svg';
import no_tick from '../assets/notick.svg';
import trash from '../assets/trash.svg';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-4 gap-3 p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-200">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer group"
      >
        <img
          src={isComplete ? tick : no_tick}
          alt="Toggle"
          className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
        />
        <p
          className={`ml-4 text-gray-800 text-lg ${
            isComplete ? 'line-through text-gray-400' : ''
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={trash}
        alt="Delete"
        className="w-5 h-5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200"
      />
    </div>
  );
};

export default Todoitems;