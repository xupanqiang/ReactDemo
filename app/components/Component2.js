


//ES5

// var React = require('react');
//
// var HelloMessage = React.createClass({
//     render: function() {
//         return (<h1>Hello,{this.props.name}!</h1>);
//     }
// });
//
// module.exports = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <HelloMessage name = "John" />
//             </div>
//         );
//     }
// });


//ES6
// import React,{Component} from 'react';
// class HelloMessage extends Component{
//     constructor() {
//         super();
//     }
//     render(){
//         return <h1>Hello {this.props.name}</h1>;
//     }
// }
// class Output extends Component{
//     constructor() {
//         super();
//     }
//     render(){
//
//         return (
//             <div>
//                 <HelloMessage name="John" />
//             </div>
//         );
//     }
// }
// export default Output;


//ES6
import React from 'react';


class Component2 extends React.Component {

    render() {
        return (
            <div>
                <h3>二、</h3>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

//导出组件
export default Component2;