import styled from 'styled-components';
import { darken } from 'polished';
export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(360deg, #3c64ad, #7159c1);
  display:flex;
  justify-content:center;
  align-items:center;
  

`;

export const Content = styled.div`
  width:100%;
  max-width: 307px;
  display:flex;
  flex-direction: column;
  text-align:center;
  form{
    margin-top:30px;
    display:flex;
    flex-direction: column;
    justify-content:center;

    input{
      padding: 13px 8px;
      margin: 5px 0;
      background: rgba(229,237,247,0.12);
      border:none;
      border-radius:4px;
      color: #ffff;

      &::placeholder{
        color: rgba(235,240,246,0.3);
      }
    }

    span{
      color: #fb6f91;
      align-self:flex-start;
      margin: 0 0 10px;
      font-weight:bold;
    }

    button{
      padding: 13px 8px;
      margin: 5px 0;
      background: rgba(10,211,255,.7);
      border:none;
      border-radius:4px;
      color: #fff;
      transition: background  0.5s;

      &:hover{
        background: ${darken(0.09,"rgba(10,211,255,.7)")};
      }
    }
    a{
      margin-top:10px;
      text-align:center;
      color: #fff;
      transition: color  0.5s;
      &:hover{
        color: ${darken(0.3,"#fff")};
      }
    }
  }
`;
