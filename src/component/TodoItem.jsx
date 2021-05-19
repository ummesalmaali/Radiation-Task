import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';

function TodoItem({ name, time }) {
    return (
        <div className="flex flex-col bg-white rounded-lg px-4 py-2 mb-2">
            <div className="flex items-center">
                <p className="outline-none bg-transparent italic text-lg text-blue-600">{name}</p>
                <PencilAltIcon className="h-5 text-blue-700 ml-2" />
            </div>
            <p className="text-md">{time}</p>
            <div className="flex justify-between">
                <div className="flex text-blue-400">
                    <span className="text-sm mr-2">Invite Others</span>
                    <span className="text-sm">Attach Fa</span>
                </div>
                <div className="flex items-center">
                    <button
                        className="text-sm bg-blue-700 text-white px-2 py-0.5 mr-2"
                        type="button"
                    >
                        Mark as done
                    </button>
                    <TrashIcon className="h-5 text-blue-700" />
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
