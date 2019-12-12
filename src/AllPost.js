import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post'

import EditComponent from './EditComponent';



class AllPost extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        console.log(this.props.posts)
        return (
            <div>
                <h1>All Posts</h1>
                {/* {this.props.posts.map((post) => <Post key={post.id} post={post} />)} 
                sending data to Post.js, first we import Post.js, line no 26 */}
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);