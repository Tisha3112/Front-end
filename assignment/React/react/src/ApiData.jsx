import React, { Component } from "react";

class ApiData extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ApiData;
