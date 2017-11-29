const initialState = {
    top_stories: [],
    story_data: {}
};

export default function stories (state = initialState, action) {
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case 'INIT_STORIES':
            var new_state = {};
            //create copy of initial state, then change thing that is updating
            new_state = Object.assign(
                {},
                state,
                {top_stories: action.stories}
            );
            console.log(new_state);
            return new_state;

        case 'GET_STORY_DATA':
            var new_state = {};
            new_state = Object.assign(
                {},
                state,
                {story_data: action.storyData}
            );

        default:
            return state
    }
}
