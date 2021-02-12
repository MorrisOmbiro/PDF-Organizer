import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const wrapperLeft = {
  marginTop: "150px",
  alignItems: "left",
  justifyContent: "left",
  maxWidth: "45%",
};

const link = {
  color: "#FFF",
  textDecoration: "none",
};

const Title = styled.h1`
  font-size: 3.5em;
  color: #212121;
  flex-flow: row;
  flex-wrap: wrap;
`;

const SubTitle = styled.h1`
  margin-top: 20px;
  font-size: 1.8em;
  color: #dca382;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`;
const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: auto;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  alignItems: "left",
  justifyContent: "left",
`;

const LeftHome = () => {
  return (
    <div style={wrapperLeft}>
      <Title>A central location for all your PDF files</Title>
      <SubTitle>
        <span>
          <Typewriter
            options={{
              strings: ["Store", "View", "Download"],
              autoStart: true,
              loop: true,
              delay: 150,
            }}
          />
        </span>
        your PDF files
      </SubTitle>
      <Button primary>
        <Link to="/register" style={link}>
          <strong>Get Started</strong>
        </Link>
      </Button>
    </div>
  );
};

export default LeftHome;
