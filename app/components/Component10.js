
//ES5
// var React = require('react');
// var UserGist = React.createClass({
//     getInitState: function() {
//         return {
//             username: '',
//             lastGistUrl: ''
//         };
//     },
//     componentDidMount: function() {
//         $.get(this.props.source, function(result) {
//             var lastGist = result[0];
//             this.setState({
//                 username: lastGist.owner.login,
//                 lastGistUrl: lastGist.html_url
//             });
//         }.bind(this));
//     },
//     render: function() {
//         return (
//             <div>
//                 {this.state.username}s last gist is <a href={this.state.lastGistUrl}> here </a>.
//             </div>
//         );
//     }
// });
//
// module.exports = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <UserGist source="https://api.github.com/users/octocat/gists" />
//             </div>
//         );
//     }
// });



//ES6
import React from 'react';

class Component10 extends React.Component {

    constructor(){
        super();
        this.state={
            username:'',
            lastGistUrl:''
        }
    }
    // componentDidMount(){
    //     $.get(this.props.source, (result) => {
    //         let lastGist = result[0];
    //         this.setState({
    //             username: lastGist.owner.login,
    //             lastGistUrl: lastGist.html_url
    //         });
    //     });
    // }
    render() {

        return(
            <div>
                <h3>十、</h3>
                {this.state.username} ..
                <a href={this.state.lastGistUrl} >here</a>
            </div>
        )
    }
}




//导出组件
export default Component10;