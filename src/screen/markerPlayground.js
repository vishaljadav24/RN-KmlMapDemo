import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

export default class markerPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCoordinate: []
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          onPress={e => {
            console.log("Array Cordinate : ", this.state.arrCoordinate);
            let tempCoordinate = e.nativeEvent.coordinate;
            this.setState(prevState => ({
              arrCoordinate: [...prevState.arrCoordinate, tempCoordinate]
            }));
          }}
        >
          {this.state.arrCoordinate.map((marker, index) => {
            return <MapView.Marker draggable key={index} coordinate={marker} />;
          })}
        </MapView>
      </View>
    );
  }
}
