# How to Create an Event Firebase and React Single Page Web App: Day 0

## Introduction to the Series
First off, welcome to my site and the first of this series. I believe that if you are looking at this, you are somebody who may be new to web development or who knows a few things but just don't know how to string everything together. If you are looking to build a single page web application from scratch, your in the right place. We will start with setting up the basics and then begin adding a list of things that every app needs. What are theses?

They are:

* A Single Page (Single Page Application)
* A Asynchronous List (Event List)
* Authentication (Administer your Events and Not Others)
* Get a Domain for your App
* Access to the Camera Media Device
* Access to the GPS Media Device
* Item Associations (Who is Going to What Event)

## Introduction to Day 0
You will be surprised on how fast it is to develop a solution locally and deploy it to a hosting site. This should be as basic as possible just to get something running but expandable for the next parts of this series.

It helps to know a few things of the web or a framework in JavaScript but I know that everyone does not know everything. So I may be a little verbose.

If you have not installed [Node.js](https://nodejs.org/en/" target="_blank), please do so now.

This will help installing React, getting important components, and deployment.

## Setting up Firebase
The best reason to use Firebase is that it is extremely scalable with many built in tools. Getting something started is super simple and also **Free**! So go to [Firebase](https://firebase.google.com/" target="_blank) and sign up.

Be sure to check the pricing if you are interested in making an expanded application.

Please sign in and add a new project. I am calling mine 'My Events' but you may give a different name and if you do be aware you may need make a couple changes here and there due to the name change.

![](../src/assets/images/ReactFirebase_Day0_00.png "Add Project")

Once created, you should be brought to your control panel for managing your backend.

## Setting up React
Now pull up your prefered terminal to enter some npm commands. I prefer doing mine right within my prefered text editor [Visual Studio Code](https://code.visualstudio.com/" target="_blank).


![](../src/assets/images/ReactFirebase_Day0_01.png "Terminal")

Make sure to have 'create-react-app' installed with command `npm i -g create-react-app`.

Go to the parent folder where you want your application to reside in using `cd`.

Since my application's name is 'My Events' I am going to run the command `create-react-app my-events`. This should create a directory and some things in it. Go into it with command `cd my-events`, then enter `npm start` to view it locally.

You should see this in your browser on `http://localhost:3000/`

![](../src/assets/images/ReactFirebase_Day0_02.png "Our Default App Site")

## Deploy to Firebase
We have setup the default React application. Lets try to deploy it now.

First we are going to create a folder and place our production ready source code by running command:

`npm run build`

We will also want the [tools to deploy to our firebase](https://www.npmjs.com/package/firebase-tools" target="_blank) site. If you have not already run this command:

`npm install -g firebase-tools`

Now let's set up Firebase on our application. Run this command:

`firebase init`

You may have to run `firebase login` before running this command. Now, let's set up Firebase once you have been logged in and ran the `init` command. First press `enter` to proceed by default.

![](../src/assets/images/ReactFirebase_Day0_03.png "Proceed with firebase")

Next, using the `spacebar` to select and `enter` to confirm your choices, select **Database** and **Hosting**.

![](../src/assets/images/ReactFirebase_Day0_04.png "Select Database and Hosting")

Now select the project that you previously made in Firebase.

![](../src/assets/images/ReactFirebase_Day0_05.png "Select Firebase Project")

Keep the default for `What file should be used for Database Rules? (database.rules.json)`.

For our public directory we will want our build directory. Type `build` and press `enter`.

We want to create a single page application so when it asks do not use the default of no and type `yes`.

We do not want to overwrite our `index.html` file so just say no.

That should be the last question. Now lets deploy!

`firebase deploy`

![](../src/assets/images/ReactFirebase_Day0_06.png "Firebase Deploy")

## Using the Firebase Database
Go to the [Firebase console](https://console.firebase.google.com" target="_blank) and we will be modifying the script and adding it into our application. Using the scripts, we will be making creating a js file with this.

![](../src/assets/images/ReactFirebase_Day0_07.png "Firebase Database scripts")

In your `src` folder create a file called `fire.js`.

![](../src/assets/images/ReactFirebase_Day0_08.png "Create fire.js")

Open this file. With the script that displayed in the Firebase console modify it so it looks like below:

![](../src/assets/images/ReactFirebase_Day0_09.png "fire.js file")

`import firebase from 'firebase'`

`var config = {`

`  apiKey: "AIzaSyBHujWjX2dljQzuXuTA0LcqHd1neM-JA8k",`

`  authDomain: "my-events-33491.firebaseapp.com",`

`  databaseURL: "https://my-events-33491.firebaseio.com",`

`  storageBucket: "my-events-33491.appspot.com",`

`  messagingSenderId: "116436781293"`

`};`

`var fire = firebase.initializeApp(config);`

`export default fire;`

Lets now change the rules for the database. We will make everything readable and writable. In the future we will change this. Open `database.rules.json` and change the rules to true for both read and write. The file should look like below.

`{`

`  "rules": {`

`    ".read": true,`

`    ".write": true`

`  }`

`}`

Run `npm install -S firebase` to install the Firebase packages.

That should be it for configuring the database. Now lets try deploying this.

Run `npm run build`

Then Run `firebase deploy`

Nothing should change on the front end side but just a check to see if it all goes well.

## Creating our Events

In the `src/App.js` file, we will be adding some lines to it. You may remove the banner but I left it in. Here is how the code looks:

![](../src/assets/images/ReactFirebase_Day0_10.png "App.js")

`import React, { Component } from 'react';`

`import logo from './logo.svg';`

`import './App.css';`

`import fire from './fire';`

`class App extends Component {`

` constructor(props) {`

`   super(props);`

`   this.state = { events: [] };`

` }`

` addEvent(e){`

`   e.preventDefault();`

`   fire.database().ref('events').push( this.eventNameEl.value );`

`   this.eventNameEl.value = '';`

` }`

` componentWillMount(){`

`   let eventsRef = fire.database().ref('events').orderByKey();`

`   eventsRef.on('child_added', eventNew => {`

`     let event = { text: eventNew.val(), id: eventNew.key };`

`     this.setState({ events: [event].concat(this.state.events) });`

`   })`

` }`

`  render() {`

`    return (`

`      <div className="App">`

`        <header className="App-header">`

`          <img src={logo} className="App-logo" alt="logo" />`

`          <h1 className="App-title">Welcome to React</h1>`

`        </header>`

`        <p className="App-intro">`

`          To get started, edit <code>src/App.js</code> and save to reload.`

`        </p>`

`       <form onSubmit={this.addEvent.bind(this)}>`

`         <input type="text" ref={ el => this.eventNameEl = el }/>`

`         <input type="submit"/>`

`         {`

`           this.state.events.map( event => <div key={event.id}>{event.text}</div> )`

`         }`

`       </form>`

`      </div>`

`    );`

`  }`

`}`

`export default App;`

Now lets deploy this.

Run `npm run build`

Then Run `firebase deploy`

When you navigate to your Hosting URL, you may will see your old site. To fix this all you have to do is `Empty Cache and Hard Reload` in the developer tools in Chrome or similar in another browser.

![](../src/assets/images/ReactFirebase_Day0_11.png "App.js")

That should be it for this day. Look forward for future days where we will look at even more interesting stuffs for your new app. In the meantime I recommend in learning React.

If you have any questions please reach out.

[Click here for the next day for Authentication](" target="_blank). <- not yet active

## Github files
[Click here](https://github.com/ajgoldenwings/AnthonyJamesPearson/tree/2017-October-Branch/assets/demos/2017-12-17_How-to-Create-an-Event-Firebase-and-React-Single-Page-Web-App-Day0" target="_blank)
