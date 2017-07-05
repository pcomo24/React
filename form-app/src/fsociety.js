import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDfq9MeRdasqu6lRrKzP_be-HxdXejiICE",
    authDomain: "react-app-132d6.firebaseapp.com",
    databaseURL: "https://react-app-132d6.firebaseio.com",
    projectId: "react-app-132d6",
    storageBucket: "react-app-132d6.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

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
firebase.auth()
    .onAuthStateChanged(function(user) {
        if (user) {
            User.user = user;

            console.log(user);
        }
    });


export default database;