import React, { Component } from 'react'
let opts = {
    name: 'name',
    age: 23,
    about: "testing",
    platform: "xbox",

    
}
export default class UserCreate extends Component {
    


render() {
    return (
        <div>
            <button onClick={this.createUser}></button>
        </div>
    )
}
}
