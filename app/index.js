/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Component7 from './components/Component7';
import Component8 from './components/Component8';
import Component9 from './components/Component9';
import Component10 from './components/Component10';


ReactDom.render(
    <div>
        <Component1 /> {/*第一个 Hello World*/}
        <Component2 title="自定义组件" /> {/*自定义组件*/}
        <Component3 /> {/*数组遍历 map*/}
        <Component4>
            <span>hello</span>
            <span>world</span>
        </Component4>{/*ol与li的实现   this.props.children   this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点*/}
        <Component5 title="123" /> {/*PropTypes    组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。*/}
        <Component6 /> {/*Click事件  获取真实的DOM节点*/}
        <Component7 /> {/*State的用法，以toggel显示文字为例*/}
        <Component8 /> {/*onChange事件，以及变量值的同步*/}
        <Component9 /> {/*定时任务事件的嵌入*/}
        {/*<Component10 source="https://api.github.com/users/octocat/gists"  /> /!*定时任务事件的嵌入*!/*/}
    </div>,
    document.getElementById('app')
);