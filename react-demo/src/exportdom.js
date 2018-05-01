import React from 'react';
import ReactDOM from 'react-dom';

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef}/>
        </div>
    );
}


function Parent (props){
    return (
        <div>
            My input: <CustomTextInput inputRef={props.inputRef} />
        </div>
    )
}


class GrandParent extends React.Component{
    render() {
        return (
            <Parent inputRef={el => this.inputElement = el}/>
        )
    }
}