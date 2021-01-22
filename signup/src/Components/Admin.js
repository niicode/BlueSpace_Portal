import React from "react";
import axios from "axios";
import "./Admin.css";

class Admin extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getUserInfo();
  };

  // renderTableHeader() {
  //   let header = Object.keys(this.state.posts[0]);
  //   return header.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>;
  //   });
  // }

  displayPost = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => {
      return (
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.firstName}</td>
          <td>{post.lastName}</td>
          <td>{post.email}</td>
          <td>{post.gender}</td>
          <td>{post.experience}</td>
        </tr>
      );
    });
  };

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

  render() {
    return (
      <div className="admin">
        <nav></nav>
        <div className="container">
          <div className="row">
            <h1 className="title">User Registration</h1>
            <table className="users">
              <tbody>
                {/* <tr>{this.renderTableHeader()}</tr> */}
                {this.displayPost(this.state.posts)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

//
export default Admin;
