



//ES5
// var React = require('react');
// var LikeButton = React.createClass({
//     getInitialState: function() {
//         return {liked: false};
//     },
//     handleClick: function(e) {
//         this.setState({liked: !this.state.liked});
//     },
//     render: function() {
//         var text = this.state.liked ? 'like' : 'haven\'t liked';
//         return (
//             <p onClick = {this.handleClick}>
//                 You {text} this.Click to toggle.
//             </p>
//         );
//     }
// });
//
// module.exports = React.createClass({
//     render: function() {
//         return (<div><LikeButton /></div>);
//     }
// });



//ES6
// import React,{Component} from 'react';
// class StateUse extends Component{
//     constructor(){
//         super();
//         this.state={
//             like:true
//         }
//     }
//     handleClick(){
//         this.setState({like:!this.state.like});
//     }
//     render(){
//         var text = this.state.like?'Like':"Unlike";
//         return(
//             <div>
//                 <p onClick={this.handleClick.bind(this)}>
//                     You {text} this.Click the toggle;
//                 </p>
//             </div>
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
//                 <StateUse />
//             </div>
//         );
//     }
// }
// export default RepeatArray;



import React from 'react';

class Component7 extends React.Component{
    //ES6写法
    constructor(){
        super();
        this.state={
            like:true
        }
    }
    handleClick(){
        this.setState({like:!this.state.like});
    }
    render(){
        const text = this.state.like?'Like':"Unlike";
        return(
            <div>
                <p onClick={this.handleClick.bind(this)}>
                    You {text} this.Click the toggle;
                </p>
            </div>
        );
    }
}
export default Component7;