import React from 'react';
import Events from './Events';
import TodoList from './TodoList';

function Main() {
    return (
        <div className="w-10/12 mt-14 py-3 px-3 flex">
            <TodoList />
            <Events />
        </div>
    );
}

export default Main;
