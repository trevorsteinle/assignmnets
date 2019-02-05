import React, { Component, createContext } from 'react';
// import { render } from 'react-dom';
const {Consumer, Provider} = createContext();


export default class HoverExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);

    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        }
    }
    render() {
        const props = {
            hoverState: this.toggleHoverState,
            handleMouseHover: this.handleMouseHover,
            ...this.state

        }

        return (
            <Provider hoverProps={props}>
                {this.props.children(props)}
            </Provider>
            /*{ <div>
                <div
                  onMouseEnter={this.handleMouseHover}
                  onMouseLeave={this.handleMouseHover}
                >
                  Hover Me
                </div>
                {this.state.isHovering && <div>Hovering right meow!</div>}
              </div> }*/
        );
    }
}

export const withHovering = C => props => (
    <div>
        {hoverProps => <C {...hoverProps}{...props} />}
    </div>
)


// render(<HoverExample />, document.getElementById('root'));
