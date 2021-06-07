import React, { Component } from 'react'

export default class Lifecomp extends Component {
    state = {
        count: 0,
        }
        static getDerivedStateFromProps(){
            console.log("getDerivedStateFromProps");
            return null;
        }
        componentDidMount(){
            console.log("componentDidMount");
            this.setState({
            })
        }

        shouldComponentUpdate(nextProps,nextState){
            console.log("shouldComponentUpdate");
            console.group("shouldComponenUpdate")
            console.log("nextState", nextState);
            console.groupEnd()
            if (nextState.count > 5){
                return false;
            }
            return true;
        }

        componentDidUpdate(prevProps,prevState,snapshot){
            console.log("componentDidUpdate");
        }

        componentWillUnmount(){
            console.log("componentWillUnmount");
        }

        onChange = ()=>{
            this.setState({
                count:this.state.count + 1,
            })
        }

    render() {
        console.log("render");
        return (
            <div>
            <div className="btn btn-primary" onClick={this.onChange}> tambah{this.state.count}</div>
            </div>
        )
    }
}
