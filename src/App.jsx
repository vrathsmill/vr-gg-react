import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {oneCourse, twoCourses, emptyCourse} from './sample_data.js'
import Courses from './components/Courses.jsx'
/*
  Display the data being as simply as necessary

  props: courses (array of courses)

    course (object):
        name - string
        students - array of students


    student (object):
          name - string
          grade - number
          iepDate - string

*/

class App extends Component {

  render() {

    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/css/materialize.min.css"/>
          <h1>Display Students</h1>
            <h4>Students taking one class:</h4><br></br>
            <Courses course={oneCourse}/>
            <h4>Students taking two classes:</h4><br></br>
            <Courses course={twoCourses}/>
              <h4>Classes that are currently empty:</h4>
            <Courses course={emptyCourse}/>
    </div>
    );
  }
}

export default App;
