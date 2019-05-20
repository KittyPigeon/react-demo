import React, { Component } from 'react';

class Avatar extends Component(){
    render(){
        return (
            <img 
                 className="avatar"
                 src={this.props.user.avatarUrl}
                 alt={this.props.user.name}
            />
        );
    }
}

class Comment extends Component(){
    render(){
        return (
            <div className="comment">
                <Avatar user={this.props.author}></Avatar>
                <div></div>
            </div>
        );
    }
}
