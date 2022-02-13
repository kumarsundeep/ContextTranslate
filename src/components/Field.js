import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  renderText(value) {
    return value === "english" ? "Name" : "Naam";
  }
  // Consumer approach
  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {(value) => this.renderText(value.language)}
            {/* Without Redux vs Context example
            {(value) => this.renderText(value)} */}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
  // The this.context approach
  //   static contextType = LanguageContext;
  //   render() {
  //     const text = this.context === "english" ? "Name" : "Naam";
  //     return (
  //       <div className="ui field">
  //         <label>{text}</label>
  //         <input />
  //       </div>
  //     );
  //   }
}
export default Field;
