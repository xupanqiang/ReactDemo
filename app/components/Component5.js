

//ES5
// var MyTitle = React.createClass({
//     getDefaultProps : function () {
//         return {
//             title : 'Hello World'
//         };
//     },
//
//     render: function() {
//         return <h1> {this.props.title} </h1>;
//     }
// });
//
// ReactDOM.render(
//     <MyTitle />,
//     document.body
// );





//ES6
import React from 'react';


class Component5 extends React.Component {


    //在react中可以定义默认props，使用es5时，可以使用getDefaultProps
    // getDefaultProps: function() {
    //     return {
    //         name: 'demo'
    //     };
    // },


    //es6中使用static defaultProps
    //由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，class的属性只能定义在class之外。所以defaultProps要写在组件外部。
    // static defaultProps = {
    //     name: 'demo'
    // }

    render() {

        return (
            <div>
                <h3>五、</h3>
                <h1> {this.props.title} </h1>
                <h2> {this.props.name} </h2>
            </div>
        )
    }
}

Component5.propTypes = {
    title: React.PropTypes.string.isRequired,
};
//es6定义默认props的正确方式
Component5.defaultProps = {
    name: 'demo'
};


//导出组件
export default Component5;