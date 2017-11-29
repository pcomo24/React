export function initStories (stories) {
    return {
        type: 'INIT_STORIES',
        //what is this setting in action
        stories: stories,
    }
}
export function getStoryData (story) {
    return {
        type: 'GET_STORY_DATA',
        storyData: story
    }
}
