import React from 'react';
import ReactDOM from 'react-dom';


/**
 * Ref 使用ref更新组件
 * Dom
 * */

//React支持给任何组件添加特殊属性。ref属性接受回调函数，并且当组件装载或者卸载之后，回调函数会立即执行。

class CustomTextInput extends React.Component {

    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        // 通过使用原生API，显式地聚焦text输入框
        this.textInput.focus();
    }

    render() {
        // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
        return (
            <div>
                <input type="text" ref={(input)=>{this.textInput = input;}}/>
                <input type="button" value="Focus the text input" onClick={this.focus}/>
            </div>
        );
    }
}


ReactDOM.render(<CustomTextInput/>, document.getElementById('root'));


//为class组件添加ref引用
class AutoFocusTextInput extends React.Component{
    componentDidMount() {
        this.textInput.focus();
    }

    render() {
        return (
            <CustomTextInput ref={(input)=>{this.textInput = input;}} />
        );
    }
}


class CustomTextInput(props){
    let textInput = null;

    function handleClick() {
        textInput.focus();
    }

    return (
        <div>
            <input type="text" ref={(input) => {textInput = input}}/>
            <input type="button" value="focus the button" onClick={handleClick} />
        </div>
    );
}