import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import { Switch, Route} from 'react-router-dom'

import UserList from './components/UserList'
import AddUser from './components/AddUser';
import About from './components/About'

class App extends Component {
    constructor(){
        super();
        
        this.state = {
            users: [],
            username: 'tun',
            email: ''
        }

        this.addUser = this.addUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.getUsers()
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <br/>
                        <Switch>
                            <Route exact path="/" render={()=> (
                                <div>
                                    <h1>All Users</h1>
                                    <hr/><br/>
                                    <AddUser
                                        handleChange={this.handleChange}
                                        email={this.state.email}
                                        username={this.state.username} 
                                        addUser={this.addUser}/>
                                    <hr/><br/>
                                    <UserList users={this.state.users}/>
                                </div>
                            )}/>
                            <Route exact path='/about' component={About}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }

    addUser(event){
        event.preventDefault();
        console.log('Added User', this.state)
        const data = {
            username: this.state.username,
            email: this.state.email
        }
        axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
        .then((res)=> {
            this.getUsers()
            this.setState({email: '', username: ''})
        })
        .catch((err)=> console.log(err))
    }

    handleChange(event){
        const obj = {}
        obj[event.target.name] = event.target.value;
        this.setState(obj)
    }

    getUsers(){
        console.log('url', process.env.REACT_APP_USERS_SERVICE_URL)
        axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
        .then((res) => { this.setState({users: res.data.data.users}) })
        .catch((err) => { console.log(err); });
    }
}

export default App;