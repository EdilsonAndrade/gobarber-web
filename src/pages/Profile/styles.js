import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  max-width: 600px;
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
   
  }

  button{
      width:100%;
      
      padding: 13px 8px;
      margin: 5px 0;
      background: rgba(243, 68, 51,.5);
      border:none;
      border-radius:4px;
      color: #fff;
      transition: background  0.5s;

      &:hover{
        background: ${darken(0.15,"rgba(243, 68, 51,.5)")};
      }
    }

    hr{
      border:0;
      height:1px;
      background: #3c64ad;
      margin: 20px 0 20px;
      opacity:0.2;
    }
`;
