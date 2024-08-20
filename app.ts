// In this Checkpoint you will Convert the code below to Typescript.

// Code 01 : 

// import React from 'react'; 
// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;


// TypeScript
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default   
 Greeting;



//  Code 02 :

// import React, { Component } from 'react'; 
// class Counter extends Component { 
// state = {
//  count: 0
//  }; increment = () => {
//  this.setState({ count: this.state.count + 1 }); 
// }; 
// render() { 
// return 
// ( <div> 
// <p>Count: {this.state.count}</p> 
// <button onClick={this.increment}>Increment</button> 
// </div> );
//  }
//  } 
// export default Counter;

import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<CounterState> {
  state = {
    count: 0
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;






// Key steps to convert the React component to TypeScript:

// Define an interface for the component's props (GreetingProps).
// Annotate the component type with React.FC<GreetingProps>.
// TypeScript will verify that the name prop is a string.