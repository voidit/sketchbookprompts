import React, { Component } from 'react'
import rainbow from './assets/rainbow.svg'
import aquarelle from './assets/aquarelle.svg'
import logo from './assets/logo.svg'
import github from './assets/github.svg'
import promptsJSON from './prompts.json'
import './App.css'

class Button extends Component {
    render() {
        return (
            <a href={this.props.href}>
                <img src={this.props.icon} alt={this.props.href} />
            </a>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prompts: [{
                "draw":"3 unlikely objects together"
            }],
            currentPrompt: 'Draw...'
        }
        this.randomize = this.randomize.bind(this)
    }

    randomize() {
        this.setState((state) => {
            let whichOne = Math.floor(Math.random() * (state.prompts.length - 1))
            return {
                ...state,
                currentPrompt: state.prompts[whichOne].draw
            }
        })
    }

    componentWillMount(state) {
        this.setState({
            ...state,
            prompts: promptsJSON
        })
        this.randomize()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={rainbow} className="App-logo" alt="logo"/>
                    <h1 onClick={this.randomize}>Draw... {this.state.currentPrompt}</h1>
                    <section className="links">
                        <Button icon={aquarelle} href="http://aquarelle.us" />
                        <Button icon={logo} href="http://voidit.net" />
                        <Button icon={github} href="https://github.com/voidit/sketchbookprompts.git" />
                    </section>
                </header>
            </div>
        )
    }
}

export default App
