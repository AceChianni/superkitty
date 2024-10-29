import React from 'react';
import './App.css';
import CatList from './components/CatList';  // Import the CatList component

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Super Kitties!</h1>
                <CatList />  {/* Use the CatList component here */}
            </header>
        </div>
    );
}

export default App;
