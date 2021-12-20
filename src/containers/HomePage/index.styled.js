import { Button } from "antd";
import styled from "styled-components";

const Buttontest = styled(Button)`
  width: 50px;
  height: 50px;
  width: 100px;
  background-color:${props => props.color  ? props.color : '#000'};
  border: none;
`;

 
export default Buttontest;

