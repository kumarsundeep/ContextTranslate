import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // Consumer Approach
  renderText(value) {
    return value === "english" ? "Submit" : "प्रस्तुत";
  }
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderText(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
        {/* Without Redux vs Context example
        {(value) => this.renderButton(value)} */}
      </ColorContext.Consumer>
    );
  }

  // The this.context approach
  //   static contextType = LanguageContext;

  //   render() {
  //     const text = this.context === "english" ? "Submit" : "Voorleggen";
  //     return <button className="ui button primary">{text}</button>;
  //   }
}
// Button.contextType = LanguageContext;
export default Button;
