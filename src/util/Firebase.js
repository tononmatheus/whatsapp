import { initializeApp } from "firebase/app";

const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor(){

        const firebase = {
            apiKey: "AIzaSyDY4uFankB2D3fw0zFTzSVd_YjTrJDz4j8",
            authDomain: "whatsapp-clone-fe98f.firebaseapp.com",
            projectId: "whatsapp-clone-fe98f",
            storageBucket: "whatsapp-clone-fe98f.appspot.com",
            messagingSenderId: "50936121092",
            appId: "1:50936121092:web:45bf3e6e7520dfadf23251",
            measurementId: "G-93B8K11QKJ"
        };

        this.init();

    }

    init(){

        if (!window._initializedFirebase) {
            const app = initializeApp(firebase);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            window._initializedFirebase = true;
        }

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result =>{

                let token = result.credential.accessToken;
                let user = result.user;

                s(user, token);

            })
            .catch(err=>{
                f(err);
            })

        });

    }

}