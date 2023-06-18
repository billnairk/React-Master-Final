import { motion } from "framer-motion";
import styled from "styled-components";

const DetailMainDiv = styled(motion.div)`
  width: 500px;
  height: 750px;
  background-color: white;
  position: absolute;
  top: 0px;
`;

const DetailBackgroundDiv = styled(motion.div)`
  width: 100vw;
  height: 10000vh;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailExitButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: tomato;
`;

function DetailDiv() {
  return (
    <DetailBackgroundDiv>
      <DetailMainDiv>
        <DetailExitButton />
      </DetailMainDiv>
    </DetailBackgroundDiv>
  );
}

export default DetailDiv;
