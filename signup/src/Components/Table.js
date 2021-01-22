import React, { Component } from 'react'
import axios from 'axios';

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      state = {
         posts: []
      }


      getUserInfo = () => {
         axios
           .get("/api/admin")
           .then((response) => {
             const data = response.data;
             console.log(data);
             console.log("we have recieved the data");
             this.setState({ posts: data });
           })
           .catch((error) => {
             console.log(error);
           });
       };
     

   renderTableData(posts) {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{firstName}</td>
               <td>{lastName}</td>
               <td>{email}</td>
               <td>{gender}</td>
               <td>{experience}</td>
            </tr>
         )
      })
   }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
         <div>
            <h1>Registered Users</h1>
         </div>
      )
   }
}

export default Table;