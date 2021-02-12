import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const link = { 
  color: "#FFF",
  textDecoration: "none",
}

const wrapperCenter = {
  marginTop: "80px",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: #212121;
`;

const SubTitle = styled.h1`
  margin-top: 20px;
  font-size: 1.8em;
  text-align: center;
  color: #dca382;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: block;
  alignItems: "center",
  justifyContent: "center",
`;

const CenterHome = () => {
  return (
    <div style={wrapperCenter}>
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
        <strong>
          <Link to="/register" style={link}>Get Started</Link>
        </strong>
      </Button>
    </div>
  );
};

export default CenterHome;
