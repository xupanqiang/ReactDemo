//ES6
import React from 'react';

class Component8 extends React.Component {
    // getInitialState() {
    //     return {liked: false};
    // }
    // handleClick() {
    //     this.setState({liked: !this.state.liked});
    // }

    render() {

        const handleClick = () => {
            this.setState({liked: !this.state.liked});
        };
        const text = this.state.liked ? 'like' : 'haven\'t liked';

        return (
            <p onClick={handleClick}>
                You {text} this. Click to toggle.
            </p>
        )
    }
}


Component7.initialState = {
    liked: false
}

//导出组件
export default Component8;