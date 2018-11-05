import React, {Component} from 'react';

export class ButtonClick extends React.Component {
    
    handleClick = () => {
        this.props.onClickFunc(this.props.incrementValue)
    }

    render() {
        return (
            <button onClick = {this.handleClick}>
                +{this.props.incrementValue}
            </button>
        )
    }
}

export const Result = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

export class Final extends React.Component {
    state = { counter : 0 }

    incrementCounter = (incrementValue) => {
        this.setState( (prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    }

    render() {
        return (
            <div>
                <ButtonClick incrementValue = {1} onClickFunc = {this.incrementCounter} />
                <ButtonClick incrementValue = {5} onClickFunc = {this.incrementCounter} />
                <ButtonClick incrementValue = {10} onClickFunc = {this.incrementCounter} />
                <ButtonClick incrementValue = {50} onClickFunc = {this.incrementCounter} />
                <Result counter = {this.state.counter} />
            </div>
        );
    }

}