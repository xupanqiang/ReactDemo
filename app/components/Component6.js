


//ES5
// var React = require('react');
// var MyComponent = React.createClass({
//     handleClick: function() {
//         React.findDOMNode(this.refs.myTextInput).focus();
//     },
//     render: function() {
//         return (
//             <div>
//                 <input type="text" ref="myTextInput" />
//                 <input type="button" value="Focus the text input" onClick= {this.handleClick} />
//             </div>
//         );
//     }
// });
//
// module.exports = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <MyComponent />
//             </div>
//         );
//     }
// });



//ES6
// import React,{Component} from 'react';
// class FocusText extends Component{
//     handleClick(){
//         React.findDOMNode(this.refs.myText).focus();
//     }
//     render(){
//         return(
//             <div>
//                 <input type="text" ref="myText" />
//                 <input type="button" value="focus the text input" onClick={this.handleClick.bind(this)} />
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
//                 <FocusText />
//             </div>
//         );
//     }
// }
// export default RepeatArray;




//ES6
import React from 'react';

class Component6 extends React.Component {

    render() {

        const handleClick = () => {
            return this.refs.tt.focus();
        };
        return (
            <div>
                <h3>六、</h3>
                <input type="text" ref="tt" style={{border:'1px solid #000'}}/>
                <input type="button" value="Focus the text input" onClick={handleClick} style={{border:'1px solid #000'}}/>
            </div>
        )
    }
}


//导出组件
export default Component6;