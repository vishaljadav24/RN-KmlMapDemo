import React from "react";
import { View } from "react-native";
import RoundButton from "../component/ui/RoundButton";

export default class dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLoadMklTapped = () => {
    this.props.navigation.navigate("MklMap");
  };
  onPlayMarkerTapped = () => {
    this.props.navigation.navigate("MarkerPlayground");
  };

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
      >
        <RoundButton btn_block mb={10} click={this.onPlayMarkerTapped}>
          PLAY WITH MARKER
        </RoundButton>

        <RoundButton btn_block mt={10} click={this.onLoadMklTapped}>
          LOAD KML DATA
        </RoundButton>
      </View>
    );
  }
}
