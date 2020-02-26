import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from '../axios/api';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={`edit/${props.exercise._id}`}>Edit</Link> | <button onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>
    </td>
  </tr>
);

export default class ExerciseList extends Component{
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
  }

  componentDidMount= () => {
    API.get('/exercises')
        .then(response => this.setState({exercises:response.data}))
        .catch(error => console.log(error));
  }

  deleteExercise = (id) => {
    API.delete(`/exercises/${id}`)
        .then(res => console.log(res.data));

    this.setState({exercises: this.state.exercises.filter(el => el._id !== id)});
  }

  exerciseList = () => this.state.exercises.map(currentExercise => <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />);

    render() {
      return (
        <div>
          <h3>Logged Exercises</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.exerciseList()}
            </tbody>
          </table>
        </div>
      )
    };
}