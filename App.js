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
    this.state = { resultText: "", calculationText: "" };
    this.opertaions = ["DEL", "+", "-", "*", "/"];
  }

  calaculateResult() {
    const text = this.state.resultText;
    this.setState({ calculationText: eval(text) });
  }

  validate() {
    const text = this.state.resultText;
    switch (text.slice(-1)) {
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
        return false;
    }
    return true;
  }

  buttonPressed(text) {
    if (text == "=") return this.validate() && this.calaculateResult();

    this.setState({ resultText: this.state.resultText + text });
  }

  operate(operation) {
    switch (operation) {
      case "DEL":
        let text = this.state.resultText.split("");
        text.pop();
        this.setState({ resultText: text.join("") });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        let resultTextVar = this.state.resultText;
        if (resultTextVar == "") return;

        const lastChar = resultTextVar.slice(-1);
        if (this.opertaions.indexOf(lastChar) > 0) {
          let text = resultTextVar.split("");
          text.pop();
          resultTextVar = text.join("");
        }
        //console.log("leave");
        this.setState({ resultText: resultTextVar + operation });
        break;
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
            key={nums[i][j]}
            style={styles.btn}
            onPress={() => this.buttonPressed(nums[i][j])}
          >
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(
        <View key={i} style={styles.row}>
          {row}
        </View>
      );
    }

    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          key={this.opertaions[i]}
          style={styles.btn}
          onPress={() => this.operate(this.opertaions[i])}
        >
          <Text style={[styles.btnText, styles.white]}>
            {this.opertaions[i]}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>
            {this.state.calculationText}
          </Text>
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
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculation: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  numbers: {
    flex: 3,
    backgroundColor: "#3d3d3d"
  },
  operations: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#434343"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  resultText: {
    fontSize: 40,
    color: "black"
  },
  calculationText: {
    fontSize: 24,
    color: "#434343"
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  btnText: {
    fontSize: 30,
    color: "white"
  },
  white: {
    color: "white"
  }
});
