import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const meta = {
    title: 'Sketchbook Prompts: Creative Art Prompt Generator for Kids and Students',
    description: "Explore endless creativity with our random art prompt generator. Perfect for art students and kids, our tool inspires artistic expression with fun and engaging prompts.",
    author: "Sketchbook Prompts",
    // canonical: 'http://example.com/path/to/page',
    meta: {
        "title": "Sketchbook Prompts: Creative Art Prompt Generator for Kids and Students",
        "description": "Explore endless creativity with our random art prompt generator. Perfect for art students and kids, our tool inspires artistic expression with fun and engaging prompts.",
        "keywords": "art prompt generator, random art ideas, creative prompts for kids, art students, drawing prompts, creative inspiration",
        "author": "Sketchbook Prompts Generator",
        "viewport": "width=device-width, initial-scale=1.0",
        "charset": "UTF-8",
        "robots": "index, follow"
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
