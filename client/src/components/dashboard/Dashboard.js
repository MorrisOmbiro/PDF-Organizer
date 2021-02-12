import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../navbar";

const containerCenter = {
  marginTop: "200px",
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const buttonCenter = {
  fontSize: "1.5em",
  fontFamily: "",
  margin: "auto",
  padding: "0.25em 1em",
  border: ".4px solid black",
  display: "flex",
  flexWrap: "wrap",
  flexFlow: "row",
  justifyContent: "center",
  alignContent: "center",
  borderRadius: "8px",
  letterSpacing: "1px",
  marginTop: "1rem",
};

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // const { user } = this.props.auth;
    // console.log(user.email);
    return (
      <React.Fragment>
        <Navbar />
        <div style={containerCenter} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <button
                style={buttonCenter}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                <strong style={{ fontFamily: "sans-serif" }}>Upload PDF</strong>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
