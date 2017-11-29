import * as firebase from "firebase";
import store from './store';
import { initStories } from './actions/index';

// set up api key and other info for firebase service
var config = {
    databaseURL: "https://hacker-news.firebaseio.com/",
};

//initialize firebase service
firebase.initializeApp(config);

var database = firebase.database();
export default database;


 database.ref('v0/topstories')
    .on('value', function(stories) {
        store.dispatch(initStories(stories.val()));
        console.log(stories.val());
    });

 database.ref('v0/item/{story[i]}') {
     .once('value').then(function () {
        console.log(story[i])
    })
}









