import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 不受控组件
 * 不建议使用
 * */
class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submited:' + this.input.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={(input)=>this.input = input}/>
                    DefaultValue:
                    <input type="text" defaultValue="default" />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

ReactDOM.render(<NameForm/>, document.getElementById('root'));

