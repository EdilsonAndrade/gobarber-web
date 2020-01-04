import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  height: 58px;
  display:flex;
  justify-content: space-between;
  background: #fff;
  nav{
    display:flex;
    justify-content:center;
    align-items:center; 
    margin:10px;
    
    img{
      margin-right:20px;
      padding-right:20px;
      border-right:1px solid #eee;
     
    }

    a{
      
      font-weight:bold;
      color: rgb(45.6%, 45.6%, 45.6%);
    }
  }
  aside{
   
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
    img{
      height:48px;
      width:48px;
      border-radius:50%;
    }
  }

`;

export const Profile = styled.div`
 padding-left:20px;
    border-left:1px solid #eee;
margin-right:10px;
  strong{
    display:block;
  }
  a{
    display:block;
    text-align:right;
    font-weight:bold;
    color: rgb(45.6%, 45.6%, 45.6%);
  }

`;