import React from "react";

export default function Synonyms(props) {
    console.log(props.meaning.synonyms)
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
            {props.meaning.synonyms.map(function (synonyms, index) {
                return <span key={index}>{synonyms}</span>;
            })}
            </ul>
        );
} else {
    return null;
}
}