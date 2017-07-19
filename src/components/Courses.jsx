import React, { Component } from 'react'
import { render } from 'react-dom'
import {oneCourse, twoCourses, emptyCourse} from '../sample_data.js'

class Courses extends Component {

    render() {
      var courseArray = []
      var studentArray = []

      this.props.course.forEach((course) => {
        course["students"].forEach((student)=>{
          studentArray.push(
            <div>
              <p>Student Name: {student["name"]}</p>
              <p>Student Grade: {student["grade"]}</p>
              <p>IEP Date: {student["iepDate"]}</p><br></br>
            </div>
          )
        })

        courseArray.push(
          <div>
          <h5> {course["name"]}</h5><br></br>
          </div>
          )
        })

    return (
      <div>
        {courseArray}
        {studentArray}
      </div>
    )
  }
}


export default Courses
