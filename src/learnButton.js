import React from "react";
import Button from "react-native-flat-button";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 40,
    marginTop: 10,
    marginBottom: 5
  }
});

export default class LearnButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Learn More"
    };
  }

  handleClick = () => {
    let buttonText =
      this.state.buttonText === "Learn More" ? "Learn Less" : "Learn More";
    this.setState({ buttonText: buttonText });
  };
  render() {
    return (
      <Button
        type="custom"
        backgroundColor={"#C24648"}
        borderColor={"#751E20"}
        borderRadius={10}
        shadowHeight={5}
        contentStyle={{fontFamily: "Montserrat"}}
        containerStyle={styles.buttonContainer}
        onClick={this.handleClick}
      >
        {this.state.buttonText}
      </Button>
    );
  }
}
