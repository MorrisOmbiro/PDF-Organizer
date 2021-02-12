import React, { useContext, useEffect } from "react";
import LeftHome from "./leftHome";
import RightHome from "./rightHome";
import CenterHome from "./centerHome";
import { ViewportContext } from "../../viewPort/viewPort";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';

const mainDiv = {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
};

const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
};

const Desktop = () => {
  return (
    <Container maxWidth="lg">

    <div id="home" style={mainDiv}>
        <LeftHome />
        <RightHome />
    </div>
    </Container>


  );
};

const Mobile = () => {
  return (
    <div id="home" style={mainDiv}>
      <CenterHome />
    </div>
  );
};

const DynamicChooser = () => {
  const { width } = useViewport();
  const breakpoint = 700;

  return width < breakpoint ? <Mobile /> : <Desktop />;
};

const MainHome = (props) => {
  // if user is logged in redirect them to dashboard 
  useEffect(() => {
    if(props.auth.isAuthenticated) {
      props.history.push("/dashboard")
    }
  })

  return <DynamicChooser />;
};

MainHome.propTypes = { 
  auth: PropTypes.object.isRequired, 
}

const mapStateToProps = state => ({
  auth: state.auth 
})

export default connect(mapStateToProps)(withRouter(MainHome));
