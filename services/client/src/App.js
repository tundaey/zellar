import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import 'bulma/css/bulma.css'
import './components/home.css'

import { Switch, Route, Link} from 'react-router-dom'

import UserList from './components/UserList'
import AddUser from './components/AddUser';
import Signin from './components/Signin';
import Home from './components/Home'

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
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" render={()=> (
                        <div>
                            <h1>All Users</h1>
                            <hr/><br/>
                            <Link to="/login">{'Sign In'}</Link>
                            <AddUser
                                handleChange={this.handleChange}
                                email={this.state.email}
                                username={this.state.username} 
                                addUser={this.addUser}/>
                            <hr/><br/>
                            <UserList users={this.state.users}/>s
                        </div>
                    )}/>
                    <Route path='/about' component={Home}/>
                    <Route path='/login' component={Signin}/>
                </Switch>
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