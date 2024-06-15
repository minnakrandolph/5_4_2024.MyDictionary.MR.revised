import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";


export default function Results(props) {
  console.log(props.results);
   if (props.results) {
   return (
   <div className="Results"> 
   <h2>{props.results.meaning.phonetic}</h2>
   {props.results.meaning.phonetic.map((phonetic, index) => {
    return (
      <div key={index}>
        <Phonetic phonetic={phonetic} />
        </div>
    );
   })} 
   {props.results.meaning.map((meaning, index) => {
    return <div key={index}> 
    <Meaning meaning={meaning} />
    </div>
   })}
   </div>
   );

 } else {
   return null;
 }
}