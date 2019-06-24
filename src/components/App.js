import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingPosts } from '../redux/actionCreators';

class App extends Component {
  componentDidMount() {
    this.props.fetchingPosts();
  }

  render() {
    const allPosts = this.props.posts.map(post => <li key={post.id}>{post.title}</li>)

    return this.props.loading ? <div>Loading...</div> : (
      <div className="App">
        <ul>{allPosts}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingPosts: () => { dispatch(fetchingPosts()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);