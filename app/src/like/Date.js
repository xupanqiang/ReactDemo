import React, { Component } from 'react'

class Date extends Component {

    // constructor () {
    //     super()
    //     this.state = {
    //         date: new Date()
    //     }
    // }

    // componentWillMount () {
    //     ajax.get('http://json-api.com/user', (userData) => {
    //         this.setState({ userData })
    //     })
    // }

    // componentWillMount () {
    //     this.timer = setInterval(() => {
    //         this.setState({ date: new Date() })
    //     }, 1000)
    // }

    // componentWillUnmount () {
    //     clearInterval(this.timer)
    // }

    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {/*{this.state.date.toLocaleTimeString()}*/}
                    {/*{new Date().toLocaleTimeString()}*/}
                </h1>
            </div>
        )
    }
}

export default Date