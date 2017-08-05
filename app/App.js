import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import moment from "moment";
import KeepAwake from "react-native-keep-awake";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: moment().format("LTS"),
      date: moment().format("LL")
    }
  }

  render() {
    setTimeout(() => {
      this.setState({
        time: moment().format("LTS"),
        date: moment().format("LL")
      })
    }, 1000)

    return(
      <View style = {styles.view}>
        <Text style = {styles.time}>
          {this.state.time}
        </Text>

        <Text style = {styles.date}>
          {this.state.date}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },

  time: {
    color: "#ffffff",
    fontSize: 80
  },

  date: {
    color: "#ffffff",
    fontSize: 40
  }
});
