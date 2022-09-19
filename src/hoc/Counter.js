import React, { Component } from 'react'
import { View, Text ,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    updateName = () => {
        this.setState(update => {
            return { count: update.count + 1 }
        })
    }

    resetCount = () =>{
        this.setState( a =>{
            return{count: a.count - 1}
        })
    }

    resetCounter = () =>{
        this.setState({
            count:0
        })
    }

    render() {
        const {count} = this.state
        return (
            <View style={{ flex: 1, flexDirection:"row", justifyContent: "space-evenly", alignItems: "center" }}>
               
                <TouchableOpacity style={styles.btn}
                onPress={()=> this.updateName()}
                >
                    <Text>Update</Text>
                </TouchableOpacity>
                <Text>{count}</Text>
                <TouchableOpacity style={styles.btn}
                onPress={()=> this.resetCount()}
                >
                    <Text style={styles.Txt}>Reset</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        height: 30,
        width:"20%",
        backgroundColor:"red"
    },
    Txt:{
        color:"#FFFFFF"
    }
})
