import React from "react";
import Meaning from "./Meaning";
import "./Results.css";


export default function Results(props) {
  console.log(props.results);
   if (props.results) {
   return (
    <div className="Results"> 
   <section>
    <h1>{props.results.word}</h1>
   <h2>({props.results.phonetic})</h2>
  {props.results.meanings.map((meaning, index) => {
    return (
    <section key={index}> 
    <Meaning meaning={meaning} />
    </section>
    );
   })}
   </section>
   </div>
   );

 } else {
   return null;
 }
}