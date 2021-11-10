import React, {Component} from 'react';
import {Button, Text, ToastAndroid} from 'react-native';
import Toast from 'react-native-root-toast';

class MyClassComp extends Component {
    Interval;
    constructor(props) {
        super(props);
        this.state = {counter:0}
    }
    componentDidMount() {
        this.Interval = setInterval(()=>{
            this.setState({counter:this.state.counter+1})

        },1000)
    }
    showToast = () =>{
        //ToastAndroid.show(`A pikachu appeared ${this.state.counter} times nearby !`, ToastAndroid.TOP);
        Toast.show(`A pikachu appeared ${this.state.counter} times nearby !`, {
            duration: Toast.durations.LONG,

        });
    }
    componentWillUnmount() {
        clearInterval(this.Interval);
    }

    render() {
        let {counter} = this.state
        return (
            <Button title="Toggle Toast" onPress={() => this.showToast()} />
        );
    }
}

export default MyClassComp;
