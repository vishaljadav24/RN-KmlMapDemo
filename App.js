import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { RootStack } from "./src/router";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "never" }}>
        <RootStack />
      </SafeAreaView>
    );
  }
}
