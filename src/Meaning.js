import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
     <h3>{props.meaning.partOfSpeech}</h3>
     {props.meaning.definition.map(function (definition, index)
     {
   
    return (
      <div key={index}>
     <div className="definition">{props.meanings.definition}
    </div>
        <div className="example">{props.meanings.example}</div>
      
        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
          );
        })}
        </div>
        );
      }
    