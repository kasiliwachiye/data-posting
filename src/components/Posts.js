import React, { Component } from 'react'

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
    }

  render() {
    return (
      <div>Posts</div>
    )
  }
}

export default Posts;
