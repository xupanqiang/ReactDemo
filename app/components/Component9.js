
//ES5
// var React = require('react');
// var Hello = React.createClass({
//     getInitState: function() {
//         return {
//             opacity: 1.0
//         };
//     },
//     componentDidMount: function() {
//         this.timer = setInterval (function() {
//             var opacity = this.state.opacity;
//             opacity -= .05;
//             if (opacity < 0.1) {
//                 opacity = 1.0;
//             }
//             this.setState({
//                 opacity: opacity
//             });
//         }.bind(this), 100);
//     },
//     render: function() {
//         return (
//             <div style={{opacity: this.state.opacity}}>
//                 Hello {this.props.name}
//             </div>
//         );
//     }
// });
//
// module.exports = React.createClass({
//     render: function() {
//         return (<div><Hello name="world" /></div>);
//     }
// });



//ES6
import React from 'react';

class Component9 extends React.Component {

    constructor(){
        super();
        this.state={
            opacity:1.0
        }
    }
    componentWillMount(){
        let time  =  setInterval(()=>{
            let opacity = this.state.opacity;
            opacity -= 0.5;
            if (opacity<0.1) {
                opacity=1.0;
            }
            this.setState({opacity:opacity});
        },100);
    }
    render() {

        return(
            <div>
                <h3>八、</h3>
                <div style={{ opacity:this.state.opacity }}>Hello, {this.props.name}!</div>
            </div>
        )
    }
}




//导出组件
export default Component9;