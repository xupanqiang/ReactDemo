//ES6 自己写
import React from 'react';// 或者 import React,{Component} from 'react';


class Component0 extends React.Component {
    renderGoodWord (goodWord, badWord) {
        const isGoodWord = true;
        return isGoodWord ? goodWord : badWord
    }
    render() {
        const isGood = false;
        return (
            <div>
                <h3>零、</h3>
                <p>
                    {this.renderGoodWord(
                        <strong> is goods</strong>,
                        <span> is not good</span>
                    )}
                </p>
                <p>
                    {isGood
                        ? <strong> is good</strong>
                        : <span> is not good</span>
                    }
                </p>
            </div>
        )
    }
}

//导出组件
export default Component0;