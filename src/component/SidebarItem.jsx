import React from 'react';

function SidebarItem({ Icon, name }) {
    return (
        <div className="flex text-white px-6 py-2 my-4 items-center hover:bg-blue-500 hover:text-black cursor-pointer active:bg-blue-500 active:text-black">
            <Icon className="h-8 mr-5" />
            <span className="inline-block">{name}</span>
        </div>
    );
}

export default SidebarItem;
