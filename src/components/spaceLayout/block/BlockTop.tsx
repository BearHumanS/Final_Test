import styled from "styled-components";
import { PiDotsSixVertical, PiCaretRight } from "react-icons/pi";
import BlockText from "./BlockText";
import BlockTemp from "./BlockTemp";
import BlockPage from "./BlockPage";
import BlockLink from "./BlockLink";

interface BlockTopProps {
  name: string;
}

export default function BlockTop({ name }: BlockTopProps) {
  return (
    <Top>
      <StyledDragDots />
      <ContentArea>{renderBlockContent({ name })}</ContentArea>
      <StyledArrow />
    </Top>
  );
}

const renderBlockContent = ({ name }: BlockTopProps) => {
  switch (name) {
    case "text":
      return <BlockText />;
    case "temp":
      return <BlockTemp />;
    case "line":
      return <Line />;
    case "page":
      return <BlockPage />;
    case "link":
      return <BlockLink />;
  }
};

const Top = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDragDots = styled(PiDotsSixVertical)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  ${({ theme }) => `${theme.textColor.gray[800]}`}
`;

const ContentArea = styled.div`
  flex-grow: 1;
  display: flex;
`;

const StyledArrow = styled(PiCaretRight)`
  height: 18px;
  height: 18px;
  ${({ theme }) => `${theme.textColor.gray[800]}`}
`;

const Line = styled.div`
  height: 4px;
  width: 210px;
  background: #d9d9d9;
`;
