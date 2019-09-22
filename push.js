const firebaseConfig = {
        apiKey: "AIzaSyBF2aWOLg8IYO9ntBNk6agDXdrasaQMwkM",
        authDomain: "musability-app.firebaseapp.com",
        databaseURL: "https://musability-app.firebaseio.com",
        projectId: "musability-app",
        storageBucket: "",
        messagingSenderId: "93508034987",
        appId: "1:93508034987:web:454f410ea139fe4c2932ee"
      };


// // Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);

console.log(firebase);

const database = firebase.database();
VENUES.forEach(element => {
   console.log(element);
});


    // // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();



    //Code to initially load all the data from venue.JSON into Firebase, needed only to run once.

    VENUES.forEach(element => {

      var venue = {
        name: element.name ? element.name: "",
        href: element.href ? element.href: "",
        address: element.address ? element.address: "",
        city: element.city ? element.city: "",
        state: element.state ? element.state: "",
        zip: element.zip ? element.zip: null,
        overallRating: element.overallRating ? element.overallRating: "",
        anonymityRating: element.anonymityRating ? element.anonymityRating: "",
        elevator: element.elevator ? element.elevator: null,
        ramps: element.ramps ? element.ramps: null,
        rampComment: element.rampComment ? element.rampComment: "",
        restrooms: element.restrooms ? element.restrooms: null,
        restroomKey: element.restroomKey ? element.restroomKey: null,
        restroomsComment: element.restroomsComment ? element.restroomsComment: "",
        overallComment: element.overallComment ? element.overallComment: "",
        image: element.image.length !== 0 ? element.image: "",
        displayImage: element.displayImage ? element.displayImage: "",
      }


    database.ref("/venues").push(venue);


    })

  })
