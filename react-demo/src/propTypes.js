import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Greeting extends React.Component {
    render() {
        return (
            <h1>hello, {this.props.name}</h1>
        );
    }
}

Greeting.propTypes = {
    name: PropTypes.number,
    onclick: PropTypes.func.isRequired
};


Greeting.defaultProps = {
    name: "helloworld"
}
ReactDOM.render(<Greeting onclick={()=>{alert('helloworld')}}/>, document.getElementById('root'));


class MyComponent extends React.Component {
    render() {
        const children = this.props.children;
        return (
            <div>
                {children}
            </div>
        );
    }
}

MyComponent.PropTypes = {
    children: PropTypes.element.isRequired
}
