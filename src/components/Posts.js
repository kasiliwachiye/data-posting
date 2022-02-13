import React, { Component } from 'react'

class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    UNSAFE_componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
    }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title.toUpperCase()}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>RAINFOREST</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;
