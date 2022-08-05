# ExamPlus 💎
## [ power fly hackerthon   ]

## 🎯 Overview

#### ‣ Given Problem statement:
Build a functional prototype of a platform that gives students an array of digital academic and social tools to stay engaged with their studies, peers and broader university community during pandemic.

#### ‣ Project Idea:
The COVID-19 Pandemic has changed the education system dramatically, with the distinctive rise of e-learning, whereby teaching is undertaken remotely and on digital platforms. Even the exams are being held in a remote fashion. Thus, this project provides an integrated platform for the students as well as the teachers to conduct examinations digitally in a hassle-free manner. One can create, attempt and monitor tests, and maintain score records easily.
This project has been built solely during the period of **Microsoft Engage'21 Mentorship Program** conducted by Microsoft to provide mentorship and to enrich students with various software development techniques.

- [x] Status : Accomplised Successfully


## 🎯 Flow Diagram
<img width=70% src="https://user-images.githubusercontent.com/51702245/142895712-17f16c4d-c56d-42bd-b6c6-23ba1a68ecbf.jpg" >


## 🎯 Installation/Environment Setup:

  Prerequisites For Running The Project Locally:
  <pre>• Node     • NPM     • Git </pre>

  #### 1. Clone App

   Create a new folder and clone the repository there using the following command:

  ```
   $ git clone https://github.com/Shatakshis667/Microsoft-Engage-2021-Project.git
  ```

 #### 2. Backend Set-Up and Installations:

   Head inside the cloned folder and install the dependencies using npm:
  ```
   $ npm install
  ```

   Next, create a .env file in the root of the project directory and  put all the config keys in this manner:
  ```
   JWT_SECRET =
   MONGODB_DATABASE_NAME =
   MONGODB_USERNAME =
   MONGODB_PASSWORD =
  ```

   Now, to start the backend server run:
  ```
    $ node index.js
  ```

#### 3. Frontend Set-Up and Installations:

   Head to the client side:
  ```
    $ cd client/
    $ cd ep-client/
  ```

   Install the dependencies using npm:
  ```
    $ npm install
  ```

   Finally, run:
  ```
    $ npm start
  ```

 ###### NOTE: It would automatically spin up a development server for you on ```PORT:3000``` & backend server on ```PORT 5000

## 🎯 Future Scopes:-
Feature | Explanation
------------ | -------------
|Upload Profile Picture| Allowing Users to upload their profile pictures.|
|Update Profile| Allowing Users to update their profile.|
|Warning messages| Warning pop-ups when a student tries to move out of the test.|
|Update and Delete Test| Allowing Teachers to update and delete the tests they have assigned.|


 ## 🎯 Conclusion:-
I would like to thank my mentor for their guidance and the Microsoft Team for curating this wonderful learning experience and for all the informative sessions. ❤️
