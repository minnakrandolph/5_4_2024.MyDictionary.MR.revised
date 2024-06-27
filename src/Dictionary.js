import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

function search() {
// documentation: https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}
let apiKey = "2e3dto1e48d1a435aab54b3f664a20b0";
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
}


function handleSubmit(event) {
    event.preventDefault();
    search();
}


function handleKeywordChange(event) {
    console.log(event.target.value);
 setKeyword(event.target.value);   
}

function load() {
    setLoaded(true);
    search();
}


if (loaded) {
return (
    <div className="Dictionary">
        <section>
        <form onSubmit={handleSubmit}>
            <input type="search" 
            onChange={handleKeywordChange} autoFocus={true} />
        </form>
        <div className="hint">
            suggested words: chroma, motif, medium, scale
        </div>
        </section>
        {keyword}
        <Results results={results} />
    </div>
    );
} else {
    load();
    return "Loading";
}
}