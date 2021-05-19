import React from 'react';
import Logo from './Logo';
import SidebarItems from './SidebarItems';

function Sidebar() {
    return (
        <div className="w-2/12 bg-gray-800 rounded-tr-lg h-screen">
            <Logo />
            <SidebarItems />
        </div>
    );
}

export default Sidebar;
