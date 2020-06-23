import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.013,
  EURO: 0.012,
  POUND: 0.011,
  RUBLE: 0.91,
  AUSDOLLAR: 0.019,
  CANDOLLAR: 0.018,
  YEN: 1.42,
  DINAR: 0.0041,
  BITCOIN: 0.0000014,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0",
    };
  }

  buttonPressed = (currency) => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({ resultValue: result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenview}>
            <View style={styles.resultcontainer}>
              <Text style={styles.result}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                keyboardType="numeric"
                placeholder="Enter Value"
                value={this.state.inputValue}
                onChangeText={(inputValue) =>
                  this.setState({
                    inputValue,
                  })
                }
              />
            </View>
            <View style={styles.converterbuttoncontainer}>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DOLLAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("EURO")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("POUND")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Pound</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("RUBLE")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Ruble</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("AUSDOLLAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>AusDollar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("CANDOLLAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>CanDollar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("YEN")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Yen</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DINAR")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Dinar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("BITCOIN")}
                style={styles.converterbutton}
              >
                <Text style={styles.converterbuttontext}>Bitcoin</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8395A7",
    marginTop: 20,
  },
  screenview: {
    flex: 1,
  },
  resultcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputcontainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DF",
  },
  input: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2,
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
  },
  converterbuttontext: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
