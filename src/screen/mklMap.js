import React from "react";
import { View } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import polygoneData from "../assets/map1.json";
//import togeoJson from "@mapbox/togeojson";
//const tj = require("@mapbox/togeojson");

export default class mklMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: []
    };
  }

  componentDidMount() {
    let finalData = [];
    polygoneData.features[0].geometry.coordinates[0].forEach(location => {
      let data = {
        latitude: location[0],
        longitude: location[1]
      };
      finalData.push(data)
    });
    console.log(finalData)
    this.setState({
      coordinates: finalData
    });
  }

  /* componentDidMount() {
    var RNFS = require("react-native-fs");
    var path = RNFS.DocumentDirectoryPath + "/test.kml";
    console.log("Path : ", path);
    // write the file
    RNFS.writeFile(
      path,
      `
    `,
      "utf8"
    )
      .then(success => {
        console.log("FILE WRITTEN!");

        let mklFile = RNFS.readFile(path, "utf8")
          .then(success => {
            console.log("FILE READ! : ", success);

            window.DOMParser = require("xmldom").DOMParser;
            var parser = new DOMParser();
            var kml = parser.parseFromString(success);

            var converted = tj.kml(kml);
            console.log("Without style : ", converted);
          })
          .catch(err => {
            console.log("Erorr while read file");
          });
      })
      .catch(err => {
        console.log(err.message);
      });
  } */

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 37.28045654323508,
            longitude: -0.7843011619688633,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <Polygon
            coordinates={this.state.coordinates}
            strokeColor="#df0000"
            fillColor="#df0000"
            strokeWidth={1}
          />
        </MapView>
      </View>
    );
  }
}
