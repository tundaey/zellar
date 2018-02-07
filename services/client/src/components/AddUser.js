import React from 'react'

const AddUser = (props)=> {
    return (
        <form onSubmit={(event)=> props.addUser(event)}>
            <div className="form-group">
                <input name="username"
                    required
                    onChange={props.handleChange}
                    value={props.username} 
                    className="form-control" 
                    type="text" 
                    placeholder="Enter a username"/>
            </div>
            <div className="form-group">
                <input name="email"
                    required
                    onChange={props.handleChange}
                    value={props.email} 
                    className="form-control" 
                    type="email" 
                    placeholder="Enter an email address"/>
            </div>
            <input 
                type="submit"
                value="Submit" 
                className="btn btn-primary btn-lg btn-block"/>
        </form>
    )
}

export default AddUser