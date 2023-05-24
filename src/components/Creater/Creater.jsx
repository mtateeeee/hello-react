import styled from 'styled-components';
import { Button } from 'components/Button';
import creImg from 'assets/Ellipse 6.svg';
const StyledCreater = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  display: flex;

  /* Text/color2 */

  color: #747475;
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262E;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
  }
  .eth {
    margin-right: 4px;
  }

`
export const Creater = ({title, amount, content, percent}) => {
  return <StyledCreater>
    <div className='title'>{title}</div>
    { amount?
      <div className='ammount-wrapper'>
      <div className='ammount-wrapper'></div>
      <img className='eth' src={creImg} alt="eth-icon"></img><span className='amount'>{amount}</span> ETH
    </div>:

    
    <div>

    <span>{content}</span> %
    <span><Button percent={percent} boderColor="#E9E9E9">{percent}%</Button></span>
  </div>
    }
  </StyledCreater>
}