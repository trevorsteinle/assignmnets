import React, { Component, createContext } from 'react'


const {Consumer, Provider} = createContext();

export default class Toggler extends Component {
    constructor(){
    super();
        this.state = {
            on: false
            // on: props.on
        }
        this.toggle = this.toggle.bind(this)
    }


    toggle(){
        this.setState(ps => ({ on: !ps.on}))
    }
    render() {
        const props = {
            toggle: this.toggle,
            ...this.state
        }
        return (
            <Provider toggleProps={props}>
            {this.props.children(props)}
            </Provider>
        )
    }
}

export const withToggler = C => props => (
    <Toggler>
        {toggleProps => <C {...toggleProps}{...props} />}
    </Toggler>
)