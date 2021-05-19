import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div className="w-4/12 bg-blue-200 mr-2 rounded-lg p-4">
            <h2 className="text-3xl uppercase text-blue-700 font-bld">To-Do</h2>
            <div>
                <div className="flex my-2">
                    <h3 className="text-sm">Today</h3>
                    <div className="border-t border-gray-800 mt-3 w-10/12 h-1" />
                </div>
                <TodoItem name="Watch a file" time="10 am" />
                <TodoItem name="Send a file" time="All day" />
            </div>
            <div>
                <div className="flex my-2">
                    <h3 className="text-sm">Tomorrow</h3>
                    <div className="border-t border-gray-800 mt-3 w-10/12 h-1" />
                </div>
                <TodoItem name="Do Exercise" time="5 am" />
                <TodoItem name="Fix the bulb" time="All day" />
            </div>
            <div>
                <div className="flex my-2">
                    <h3 className="text-sm">This Week</h3>
                    <div className="border-t border-gray-800 mt-3 w-10/12 h-1" />
                </div>
                <TodoItem name="Watch a file" time="10 am" />
                <TodoItem name="Apply for the bus.." time="10 am" />
                <TodoItem name="Weekly Shopping" time="10 am" />
            </div>
        </div>
    );
}

export default TodoList;
