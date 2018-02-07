import React from 'react'

const UserList = (props)=> {
    return (
        <div>
            {
                props.users.map((user)=> {
                    return (
                        <h4 key={user.id}>
                        {user.username}
                        </h4>
                    )
                })
            }
        </div>
    )
}

export default UserList