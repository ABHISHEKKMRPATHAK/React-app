import React from 'react'

function UserTable(props) {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                props.users.length>0 ?(
                    props.users.map((users)=>(
                        <tr key={users.id}>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>
                            <button className='button muted-button'>Edit</button>
                            <button className='button muted-button'>Delete</button>
                        </td>
                    </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                )
            }
         
        </tbody>
    </table>
  )
}

export default UserTable