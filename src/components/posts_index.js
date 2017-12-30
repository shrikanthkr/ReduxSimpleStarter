import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return(
      <li className='list-group-item' key={post.id}>
        <Link to={"posts/"+post.id}>
        <strong >{post.title} </strong>
        <span className='pull-xs-right'>{post.categories} </span>
        </Link>
      </li>
    )
    });
  }
  render(){
    return (
      <div>
        <div className='text-xs right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add a post
          </Link>

        </div>
        <h1>PostsNewForm</h1>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex);
