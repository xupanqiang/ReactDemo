
//ES5
// var React = require('react');
// var InputComponent = React.createClass({
//     getInitialState: function() {
//         return {value: 'Hello!'};
//     },
//     handleChange: function(e) {
//         this.setState({value: e.target.value})
//     },
//     render: function() {
//         var value = this.state.value;
//         return (
//             <div>
//                 <input type="text" value={value} onChange={this.handleChangle} />
//                 <p>{value}</p>
//             </div>
//         );
//     }
// });
// module.exports = React.createClass({
//     render: function() {
//         return (<div><InputComponent /></div>)
//     }
// });



//ES6
import React from 'react';

class Component8 extends React.Component {


    constructor(){
        super();
        this.state={
            value:'Hello!'
        }
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    render() {

        const value= this.state.value;
        return(
            <div>
                <input type="text" value={value} onChange={this.handleChange.bind(this)} />
                <p>
                    {value}
                </p>
            </div>
        )
    }
}




//导出组件
export default Component8;