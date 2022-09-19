import React, { Component } from 'react'

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        inrementCounter = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        decrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count - 1 }
            })
        }


        resetCounter = () =>{
            this.setState({
                count:0
            })
        }


        render() {
            const {inrementCounter, decrementCount} = this.state;
            return <OriginalComponent
             count={this.state.count} 
            inrementCount={inrementCounter} 
            decrementCount={decrementCount} />
        }
    }
    return NewComponent;
}
export default UpdatedComponent;