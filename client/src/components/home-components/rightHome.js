import Image from "react-bootstrap/Image";
import styled from "styled-components";

const wrapperRight = {
  marginTop: "80px",
  alignItems: "right",
  justifyContent: "right",
  marginLeft: "auto",
  width: "50%",
};

const Wrapper = styled.section`
  padding: 0.3em;
  border-radius: 10px;
  background: papayawhip;
  width: 100%; 
  height: 50%;
`;

const personReading = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=841&q=80"
const RightHome = () => {
  return (
    <div  style={wrapperRight}>
      <Wrapper>
        <Image
          fluid
          rounded
          alt="person reading"
          src= {personReading}
        />
      </Wrapper>
    </div>
  );
};

export default RightHome;
