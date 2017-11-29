import React, { Component } from 'react';
import { connect }from 'react-redux';

class StoryList extends Component {
    renderList() {
        return this.props.stories.map((story) => {
            return (
                <li key={story}>{story}</li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        stories: state.stories.top_stories
    }
}

StoryList = connect(mapStateToProps)(StoryList);
export default StoryList;

