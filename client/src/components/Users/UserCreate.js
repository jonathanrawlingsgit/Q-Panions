import React, { Component } from 'react'
let opts = {
    name: 'name',
    age: 23,
    about: "testing",
    platform: "xbox",

    
}
export default class UserCreate extends Component {
    
    createUser = () => {
        fetch('/users', {
            method: 'post',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({user: opts}) //package to backend
        }).then(function (response) {
            console.log(response)
            return response.json();
         }).then(function (data) {
        //     ChromeSamples.log('Created Gist:', data.html_url);
        });
    
    }

render() {
    return (
        <div>
            <button onClick={this.createUser}></button>
        </div>
    )
}
}
