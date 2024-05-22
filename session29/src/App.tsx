import React from "react";
import Function from "./components/Function";
import Exercises01 from "./components/Exercises01";
import Parent_Comp from "./components/Parent_Comp";
import ParentComponent from "./components/ParentComponent";
import Parent06 from "./components/Parent06";
import Exercises02 from "./components/Exercises02";
import Exercises03 from "./components/Exercises03";

export default function App(){
   return (
    <div> 
      App 
      <Function></Function>
      <Exercises01></Exercises01>
      <Exercises02></Exercises02>
      <Exercises03></Exercises03>
      <Parent_Comp></Parent_Comp>
      <ParentComponent></ParentComponent>
      <Parent06></Parent06>
    </div>
   )
}