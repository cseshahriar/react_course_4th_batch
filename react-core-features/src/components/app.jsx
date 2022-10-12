import React, {Component} from "react";
import Profile from "./profile/index";
// import Skills from './profile/Skills';

import MyProps from './props';

const MyComponent = () => <h1>My Component</h1>;

const ChildComponent = props => (
    <div>
        <h3>I am child component</h3>
        <p>I don't know what to do</p>
        {props.children}
    </div>
)

class Child extends React.Component {
    render() {
        this.props.func(this)
        return <h1>I am child component</h1>
    }
}


class App extends Component { // class base/stateful, smart component
    // component have to layer 1. data 2. representation

    // 1.Data and logic layer (optional)
    /**
    * 1. State
    * 2. Variable or Properties
    * 3. Function or Methods
    * 4. Life Cycle methods
    */

    // 2.Representation
    /**
    * 5. JSX
    */

    // state is component self data
    
    // constructor
    constructor(props) {
        super(props)
        this.count = 0 // property
        // this.state = {
        //     count: 0
        // }
    }

    // property new style
    countProperty = 10

    state = {
        finalCount: 0
    };

    // function pass child component
   getContext(context) {
       console.log(context);
   }
   
   render() {
        this.getContext(this); 
        console.log(this.count);

        return (
            <div>
                <Profile/>
                {/*  
                <div style={{marginTop:'30px', marginBottom: '30px'}}>
                    <h3 style={{marginBottom: '20px'}}>List of Programmers</h3>
                    <MyProps name="Shahriar Hosen"/>
                    <MyProps name="Shorna"/>
                </div>
                 */}
                <h1>Pass function as a props</h1>
                <Child func={this.getContext}/>

                <ChildComponent>
                    <h2>Hello, I am from parent</h2>
                    <h4>I am child of  child component</h4>
                </ChildComponent>


                <h1>Count {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1});
                }}>Increment</button>

                <h1>Count {this.state.finalCount}</h1>
                <button onClick={
                    () => {
                        this.setState({finalCount: this.state.finalCount + 1})
                    }
                }>Increment</button>

            </div>
        )
    }
}

export default App;

// there are two different components
// 1. class base component
// 2. function base component


// functional component has no data layer
// functional component
// functional component is also called dump component
// only for view then use functional component
// functional component use when make ui generation no logic
function MyFunctionBaseComponent() {
    const name = "shahriar";
    return <h1>Hello React, You are awesome {{ name }}</h1>
}

const AnotherFunctionalComponent = () => {
    <h1>Hello React, You are awesome</h1>
}