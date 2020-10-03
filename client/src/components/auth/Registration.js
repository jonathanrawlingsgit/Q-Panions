import React, { Component } from 'react';
// import axios from 'axios';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }

        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault() 
        this.props.createUser(this.state)


    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" class="input"
                        placeholder="Email" value={this.state.email}
    
                        onChange={(event) => this.handleChange(event)} required />

                    <input type="password" name="password_confirmation"
                        placeholder="Password confirmation" value={this.state.password_confirmation}
                        onChange={this.handleChange} required />
                    

                    <button  type="submit">Register</button>
                    <div>
                    <input typer="about" name="about" placeholder="about" value={this.state.about} onChange={this.handleChange}/>
                    </div>
                </form>

            </div>
        )
    }
}
