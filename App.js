/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = { resultText: "" };
  }

  calaculateResult() {
    const text = this.state.resultText;
  }

  buttonPressed(text) {
    if (text == "=") return this.calaculateResult();

    this.setState({ resultText: this.state.resultText + text });
  }

  operate(operation) {
    switch (operation) {
      case "D":
        let text = this.state.resultText.split("");
        text.pop();
        this.setState({ resultText: text.join("") });
    }
  }

  render() {
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]];
    let rows = [];
    for (let i = 0; i < 4; i++) {
      row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.buttonPressed(nums[i][j])}
          >
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let opertaions = ["D", "+", "-", "*", "/"];
    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.operate(opertaions[i])}
        >
          <Text style={[styles.btnText, styles.white]}>{opertaions[i]}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculation: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow"
  },
  operations: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "black"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  resultText: {
    fontSize: 40,
    color: "white"
  },
  calculationText: {
    fontSize: 24,
    color: "white"
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  btnText: {
    fontSize: 30
  },
  white: {
    color: "white"
  }
});
