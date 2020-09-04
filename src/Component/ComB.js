import React,{useContext} from 'react'
import ComC from './ComC';
import {FirstName,LastName} from '../App';

const ComB =()=>{
const fname = useContext(FirstName);
const lname =useContext(LastName)
   return(
       <>
<h1>Practice with USeContext</h1>
   <h2>My name is {fname} {lname}</h2>
<ComC />
</>
   ) 
}
export default ComB;