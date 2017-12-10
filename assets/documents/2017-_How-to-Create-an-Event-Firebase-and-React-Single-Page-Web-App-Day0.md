# How to Create an Event Firebase and React Single Page Web App: Day 0

## Introduction to the Series
First off, welcome to my site and the first of this series. I belive that if you are lookin at this, you are sombody who may be new to web development or who knows a few things but just dont know how to string everything together. If you are looking to build a site from scratch, your in the right place. We will start with setting up the basics and then begin adding a list of things that every app needs. What are theses?
They are
- A Single Page (Single Page Application)
- A Asynchronous List (Event List)
- Authentication (Administer your Events and Not Others)
- Get a Domain for your App
- Access to the Camera Media Device
- Access to the GPS Media Device
- Item Associations (Who is going to What Event)

## Introduction to Day 0
You will be surprised on how fast it is to develop a solution locally and deploy it up into the cloud. This should be as basic as possible just to get something running but expandable for the next parts of this series.

Knowing a few things of the web or a framework in JavaScript helps but I know that everyone does not know everything. So I may be a little verbose.

If you have not installed [Node.js](https://nodejs.org/en/" target="_blank), please do so now.

This will help installing React, getting important components, and deployment.

## Setting up Firebase
The best reason to use Firebase is that it is extremely scalable with many built in tools. Getting something started is super simple and also Free! So go to [Firebase](https://firebase.google.com/" target="_blank) and sign up.

Be sure to check the pricing if you are interested in making an expanded application.

Please sign in and add a new project. I am calling mine 'My Events' but you may give a different name and if you do be aware you may need make a couple changes here and there due to the name change.

![](../assets\images\ReactFirebase_Day0_00.png "Add Project")

Once created, you should be brought to your control pannel for managing your backend.

## Setting up React
Now pull up your prefered terminal to enter some npm commands. I prefer doing mine right within my prefered text editor [Visual Studio Code](https://code.visualstudio.com/" target="_blank).


![](../assets\images\ReactFirebase_Day0_01.png "Terminal")

Make sure to have 'create-react-app' installed with command `npm i -g create-react-app`.

Go to the parent folder where you want your application to reside in using `cd`.

Since my application's name is 'My Events' I am going to run the command `create-react-app my-events`. This should create a directory and some things in it. Go into it with command `cd my-events`, then enter `npm start` to view it locally.

You should see this in your browser on `http://localhost:3000/`

![](../assets\images\ReactFirebase_Day0_02.png "Our Default App Site")

## Deploy to Firebase




...

## Creating our Events



