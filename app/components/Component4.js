



//ES5

// var React = require('react');
// var RepeatLi = React.createClass({
//     render: function() {
//         return(
//             <ol>
//                 {
//                     this.props.children.map(function(child) {
//                         return <li>{child}</li>;
//                     });
//                 }
//             </ol>
//         );
//     }
// });
// module.exports = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <RepeatLi>
//                     <span>hello</span>
//                     <span>world</span>
//                 </RepeatLi>
//             </div>
//         );
//     }
// });


//ES6
// import React,{Component} from 'react';
// class RepeatLi extends Component{
//     render(){
//         return (
//             <ol>
//                 {
//                     this.props.children.map((child)=>{return <li>{child}</li>})
//                 }
//             </ol>
//         );
//     }
// }
// class RepeatArray extends Component{
//     constructor() {
//         super();
//     }
//     render(){
//         return (
//             <div>
//
//                 <RepeatLi>
//                     <span>hello</span>
//                     <span>world</span>
//                 </RepeatLi>
//
//             </div>
//         );
//     }
// }
// export default RepeatArray;




//ES6
import React from 'react';


class Component4 extends React.Component {

    render() {
        return (
            <div>
                <h3>四、</h3>
                <ol>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <li>{child}</li>;
                        })
                    }
                </ol>
            </div>
        )
    }
}

//导出组件
export default Component4;