import React, {Component} from 'react';
import {Text, Button} from "react-native";

class Counter extends Component {
    Interval;
    constructor(props) {
        super(props);
        this.state = {
            counter:this.props.InitValue,
            steps: this.props.Steps,
            reversed: this.props.Reversed,
            nullComponent: this.props.NullComponent,
            maxValue: this.props.MaxValue,
            maxComponent: this.props.MaxComponent
        }
    }

    componentDidMount() {
        this.Interval = setInterval(()=>{
            this.setState({counter:this.state.counter+this.state.steps})
        },1000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
         clearInterval(this.Interval);
    }

    render() {
        let { counter } = this.state
        let { navigation } =this.props
        return (
            <>
            <Text>
                hello
            </Text>
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile')
            }
        /></>
        );
    }
}

export default Counter;
