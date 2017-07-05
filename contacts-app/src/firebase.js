import * as firebase from "firebase";

// set up api key and other info for firebase service
var config = {
    apiKey: "AIzaSyB1S1vTBuh7taz1AO0GJqMYNJ9BVynpVMw",
    authDomain: "contacts-app-e2443.firebaseapp.com",
    databaseURL: "https://contacts-app-e2443.firebaseio.com",
    projectId: "contacts-app-e2443",
};

//initialize firbase service
firebase.initializeApp(config);

//sign-in authentication with google, check which providers are used via authentication > sign in method on firebase
export var User = {};
export function auth () {
    return new Promise(function (resolve, reject) {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                User.user = result.user;
                resolve(User);

                setTimeout(function () {
                    database.ref('contacts/' + User.user.uid)
                        .once('value').then(function(contacts) {
                        console.log(contacts.val());
                    });
                }, 2000);

                database.ref('contacts/' + User.user.uid)
                    .on('value', function(contacts) {
                        console.log(contacts.val());
                    });
            })
            .catch(function (e) {
                reject(e);
            });
    });
}








var database = firebase.database();
export default database;

