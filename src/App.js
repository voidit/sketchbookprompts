import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import rainbow from './assets/rainbow.svg'
import aquarelle from './assets/aquarelle.svg'
import logo from './assets/logo.svg'
import github from './assets/github.svg'
import promptsJSON from './prompts.json'
import './App.css'

const meta = {
    title: 'Sketchbook Prompts: Creative Art Prompt Generator for Kids and Students',
    description: "Explore endless creativity with our random art prompt generator. Perfect for art students and kids, our tool inspires artistic expression with fun and engaging prompts.",
    // canonical: 'http://example.com/path/to/page',
    keywords: "art prompt generator, random art ideas, creative prompts for kids, art students, drawing prompts, creative inspiration",
    author: "Sketchbook Prompts Generator",
    viewport: "width=device-width, initial-scale=1.0",
    charset: "UTF-8",
    robots: "index, follow"
}


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
                "draw": "3 unlikely objects together"
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
                <Helmet>
                    <meta name="title" content="Sketchbook Prompts: Creative Art Prompt Generator for Kids and Students" />
                    <meta name="description" content="Explore endless creativity with our random art prompt generator. Perfect for art students and kids, our tool inspires artistic expression with fun and engaging prompts." />
                    <meta name="keywords" content="art prompt generator, random art ideas, creative prompts for kids, art students, drawing prompts, creative inspiration" />
                    <meta name="author" content="Sketchbook Prompts Generator" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="charset" content="UTF-8" />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <header className="App-header">
                <img src={rainbow} className="App-logo" alt="logo"/>
                    <h1 onClick={this.randomize}>Draw... {this.state.currentPrompt}</h1>
                    <section className="links">
                        <Button icon={aquarelle} href="http://aquarelle.us"/>
                        <Button icon={logo} href="http://voidit.net"/>
                        <Button icon={github} href="https://github.com/voidit/sketchbookprompts.git"/>
                    </section>
                </header>
            </div>
        )
    }
}

export default App
