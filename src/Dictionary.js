import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0],[1]);
    }


function search(event) {
    event.preventDefault();
alert(`Searching for ${keyword} definition`);

// documentation: https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}
let apiKey = "2e3dto1e48d1a435aab54b3f664a20b0";
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
console.log(apiUrl);
axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
    console.log(event.target.value);
 setKeyword(event.target.value);   
}

return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" 
            onChange={handleKeywordChange} autoFocus={true} />
        </form>
    </div>
    );
}