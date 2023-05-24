
import styled from 'styled-components';
import greenArrow from "assets/green-arrow.svg";
import redArrow from "assets/red-arrow.svg";
const StyledButton = styled.button`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  border: ${props => props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${props => props.textColor};
  color: ${props => props.fontSize};
  img {
    margin-right: 8px;
  }
`;
export const Button = ({ width, height, textColor, bgColor, boderColor, percent, fontSize, borderRadius, children, ...rest }) => {
  return <StyledButton 
    percent={percent}
    width={width}
    height={height}
    textColor={textColor}
    bgColor={bgColor}
    boderColor={boderColor}
    fontSize={fontSize}
    borderRadius={borderRadius}
    {...rest}
    >
      { percent && <img src={ percent< 0 ? redArrow : greenArrow} alt="arr"></img> }
      {children}
    </StyledButton>;
 }
 Button.defaultProps = {
  bgColor: '#FFFFFF',
  textColor: '#5429FF',
  width: 128,
  height: 46,
  borderRadius: '40px',
  fontSize: 16,
};