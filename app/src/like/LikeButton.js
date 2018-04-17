//ES6 自己写
import React from 'react';// 或者 import React,{Component} from 'react';


class LikeButton extends React.Component {
    constructor () {
        super()
        this.state = { isLiked: true }
    }

    onClick () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render() {
        return (
            <div>
                <button className='like-btn' onClick={this.onClick.bind(this)}>
                    <span className='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
                    <span>👍</span>
                </button>
            </div>
        )
    }
}

//导出组件
export default LikeButton;