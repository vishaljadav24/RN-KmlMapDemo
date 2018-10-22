import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import Ripple from "../Ripple";
import { Color } from "../../../utils/color";
import PropTypes from "prop-types";

class RoundButton extends React.Component {
  onClick = () => {
    if (this.props.click) this.props.click();
  };

  render() {
    let btnContainerStylesArray = [];
    let btnTextStylesArray = [{ paddingHorizontal: 5, paddingVertical: 10 }];
    let btnWholeStyles = [];
    btnWholeStyles.push({
      marginTop: this.props.mt,
      marginBottom: this.props.mb,
      marginLeft: this.props.ml,
      marginRight: this.props.mr
    });
    if (this.props.btn_block) {
      btnWholeStyles.push({
        alignSelf: "stretch"
      });
    }

    let borderColor = this.props.borderColor
      ? this.props.borderColor
      : this.props.backgroundColor;
    btnContainerStylesArray.push({
      backgroundColor: this.props.backgroundColor,
      borderColor: borderColor,
      alignItems: "center",
      borderRadius: this.props.border_radius,
      borderWidth: 1,
      borderBottomWidth: 0
    });
    btnTextStylesArray.push({ color: this.props.textColor });

    return (
      <TouchableHighlight style={btnWholeStyles}>
        <View>
          <Ripple
            style={btnContainerStylesArray}
            rippleContainerBorderRadius={30}
            onPress={this.onClick}
          >
            <Text style={btnTextStylesArray}>
              {this.props.children.toUpperCase()}
            </Text>
          </Ripple>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundButton.defaultProps = {
  ...TouchableHighlight.defaultProps,
  textColor: Color.WHITE,
  backgroundColor: Color.PRIMARY,
  btn_block: false,
  border_radius: 30,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0
};
RoundButton.propTypes = {
  ...TouchableHighlight.propTypes,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  btn_block: PropTypes.bool,
  border_radius: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number
};
export default RoundButton;
