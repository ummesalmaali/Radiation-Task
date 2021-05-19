import { SearchIcon } from '@heroicons/react/outline';
import { PencilIcon, PlusIcon } from '@heroicons/react/solid';
import React from 'react';

function Topbar() {
    return (
        <div className="bg-blue-600 py-3 px-6 flex w-full absolute top-0 -z-10">
            <div className="w-2/12" />
            <div className="w-10/12 flex justify-between">
                <form className="flex flex-0 border border-white text-white w-2/12 py-0.5 px-2 items-center rounded-sm">
                    <SearchIcon className="h-5" />
                    <input
                        type="text"
                        className="bg-transparent outline-none w-10/12 ml-2 text-sm"
                    />
                </form>

                <div className="flex justify-between w-4/12">
                    <button
                        type="button"
                        className="flex bg-white text-blue-700 rounded-md px-2 py-1 items-center"
                    >
                        <PencilIcon className="h-5" />
                        Edit Arrangements
                    </button>
                    <button
                        type="button"
                        className="flex bg-white text-blue-700 rounded-md px-2 py-1 items-center"
                    >
                        <PlusIcon className="h-5" />
                        Add New
                    </button>
                    <div>
                        <span className="w-8 h-8 bg-white rounded-full flex justify-center items-center text-lg">
                            R
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
