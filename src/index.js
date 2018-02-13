import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyASg5YBCZA7fRQvjH0W-9t5Aqypgldpjj0';

// create a new component - should produce some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// take this component's generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));