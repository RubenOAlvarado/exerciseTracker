import React, {Component} from 'react';

export default class CreateUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            descrption: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            users:['test user'],
            username: 'test user'
        });
    }

    onChangeUserName(e){
        this.setState({username:e.target.value});
    }

    onChangeDescription(e){
        this.setState({description:e.target.value});
    }

    onChangeDuration(e){
        this.setState({duration: e.target.value});
    }

    onChangeDate(date){
        this.setState({date:date})
    }

    onSubmit(e){
        e.preventDefault();
        const {username, description, duration, date} = this.state;

        const exercise = {
            username,
            description,
            duration,
            date
        }

        console.log(exercise);

        window.location = '/';
    }

    render() {
      return (
        <div>
            <h3>Create New Exercise</h3>
            <form onSubmit={this.onSubmit}></form>
        </div>
      )
    };
}