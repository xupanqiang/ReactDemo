

//当你在React class中需要设置state的初始值或者绑定事件时，需要加上constructor(){}




//ES6 自己写
import React from 'react';// 或者 import React,{Component} from 'react';


class Component1 extends React.Component {

    render() {
        return (
            <div>
                <h3>一、</h3>
                <p>Hello World! by 2018....</p>
            </div>
        )
    }
}

//导出组件
export default Component1;