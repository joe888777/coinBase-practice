import styled from "styled-components";
import { motion } from "framer-motion";
import loading from "../img/loading.gif";
const Loading = () => {
  return (
    <LoadingStyle>
      <img src={loading} alt={`loading`} />
    </LoadingStyle>
  );
};

const LoadingStyle = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export default Loading;
