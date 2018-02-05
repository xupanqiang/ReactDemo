

//ES5

// var React = require('react');
// var RepeatArray = React.createClass({
//     render: function() {
//         var names = ['Alice', 'Emily', 'Kate'];
//         var arrs = [
//             <h1>Hello World</h1>,
//             <h2>React is awesome</h2>
//         ];
//         return (
//             <div>
//                 {arr}
//                 {
//                     names.map(function (name) {return <div>Hello, {name}!</div>;});
//                 }
//             </div>
//         );
//     }
// });
//
// module.exports = RepeatArray;


//ES6
// import React,{Component} from 'react';
// class RepeatArray extends Component{
//     constructor() {
//         super();
//     }
//     render(){
//         var arr = [
//             <h1>Hello world!</h1>,
//             <h2>React is awesome</h2>,
//         ];
//         var names = ['Alice', 'Emily', 'Kate'];
//         return (
//             <div>
//                 {arr}
//                 {
//                     names.map((name) =>{return <div>Hello, {name}!</div>;} )
//                 }
//             </div>
//         );
//     }
// }
// export default RepeatArray;




//ES6
import React from 'react';


class Component3 extends React.Component {

    render() {
        const names = ['Alice', 'Emily', 'Kate'];
        return (
            <div>
                {
                    names.map(function (name) {
                        return <div key={name}>Hello, {name}!</div>
                    })
                }
                <p>{names}</p>
            </div>
        )
    }
}

//导出组件
export default Component3;