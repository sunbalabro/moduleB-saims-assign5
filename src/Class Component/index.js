import React, { Component } from 'react'

export default class Info extends Component {
    
    render() {
        this.state={
           name:"Sunbal",
           Course:"Web and Mob app development",
           Institute:"Jawan Pakistan",
           Module:"B",
           Qualification:"Intermediate"
        }
        return (
            <div className="info">
                <h1>Name: {this.state.name}</h1>
                <h1>Course: {this.state.Course}</h1>
                <h1>Module: {this.state.Module}</h1>
                <h1>Institute: {this.state.Institute}</h1>
                <h1>Qualification: {this.state.Qualification}</h1>
            </div>
        )
    }
}
