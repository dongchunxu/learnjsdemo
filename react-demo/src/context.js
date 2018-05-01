import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//
// class Button extends React.Component{
//     render() {
//         return (
//             <button style={{background: this.props.color}}>
//                 {this.props.children}
//             </button>
//         );
//     }
// }
//
// class Message extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.text}<Button color={this.props.color}>Delete</Button>
//             </div>
//         );
//     }
// }
//
// class MessageList extends React.Component {
//     render() {
//         const color = "purple";
//         const children = this.props.messages.map((message) =>
//             <Message text={message.text} color={color} />
//         );
//         return <div>{children}</div>;
//     }
// }
//
// //以上是正常的做法。下面是context的实现方式
//


class Button extends React.Component{
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: PropTypes.string
}

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {color:"red"}
    }
    render() {
        const children = this.props.messages.map((message) => <Message text={message.text}/>);
        return <div>{children}</div>
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string
};
ReactDOM.render(<MessageList messages={[{"text":"标题1"},{"text":"标题2"}]}/>, document.getElementById('root'));


