import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "transparent" : "#F6AE84")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#ffffff" : "#F6AE84")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  outline: 2px solid #F6AE84;
  /* border-radius: 10px; */

  /* display: flex; */
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => (dark ? "#495FA6" : "#f6efde")};
    background: ${({ primary }) => (primary ? "#F6AE84" : "#F6AE84")};
  }
`;
