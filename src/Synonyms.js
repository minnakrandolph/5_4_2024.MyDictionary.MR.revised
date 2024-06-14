import React from "react";

export default function Synonyms(props) {
    console.log(props)
    if (props.synonyms !== null) {
        return (
            
            <div className="Synonyms">
            <strong>Synonym: </strong>
            {props.synonyms.map(function (synonyms, index) {
                return <span key={index}>{synonyms}</span>;
            })}
            </div>
        );
} else {
    return null;
}
}