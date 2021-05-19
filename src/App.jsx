import React from 'react';
import Main from './component/Main';
import Sidebar from './component/Sidebar';
import Topbar from './component/Topbar';

function App() {
    return (
        <div className="flex">
            <Topbar />
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
