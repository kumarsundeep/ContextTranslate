import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select Language:
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className="flag uk"
        ></i>
        <i
          onClick={() => this.context.onLanguageChange("dutch")}
          className="flag in"
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
// Without Redux vs Context example
// import React from "react";

// class LanguageSelector extends React.Component {

//   render() {
//     return (
//       <div>
//         Select Language:
//         <i
//           onClick={() => this.props.changeLanguage("english")}
//           className="flag us"
//         ></i>
//         <i
//           onClick={() => this.props.changeLanguage("dutch")}
//           className="flag nl"
//         ></i>
//       </div>
//     );
//   }
// }

// export default LanguageSelector;
