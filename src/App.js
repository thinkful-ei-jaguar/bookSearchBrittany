import React from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyA_wKzlVvhu8sbdQynrNPtk8tzzMB7QusY';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?
//q=pride+prejudice&download=epub&key=yourAPIKey'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Books Search</h1>
      </header>
      <Main />
    </div>
  );
}

export default App;
