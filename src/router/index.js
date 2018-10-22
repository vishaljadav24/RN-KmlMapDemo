import Dashboard from "../screen/dashboard";
import MklMap from "../screen/mklMap";
import MarkerPlayground from "../screen/markerPlayground";
import { createStackNavigator } from "react-navigation";
import { Color } from "../utils/color";

const navigationTitle = {
  color: Color.WHITE
};
const navigationStyle = {
  backgroundColor: Color.PRIMARY
};

export const RootStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard",
      headerBackTitle: null,
      headerTitleStyle: navigationTitle,
      headerStyle: navigationStyle,
      headerTintColor: Color.WHITE
    }
  },
  MklMap: {
    screen: MklMap,
    navigationOptions: {
      title: "MKL Data",
      headerTitleStyle: navigationTitle,
      headerStyle: navigationStyle,
      headerTintColor: Color.WHITE
    }
  },
  MarkerPlayground: {
    screen: MarkerPlayground,
    navigationOptions: {
      title: "Marker Playgound",
      headerTitleStyle: navigationTitle,
      headerStyle: navigationStyle,
      headerTintColor: Color.WHITE
    }
  }
});
