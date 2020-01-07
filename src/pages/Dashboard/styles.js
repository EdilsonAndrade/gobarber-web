import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 30px auto;
  text-align:center;
`;

export const Head = styled.div`
display:flex;
justify-content:center;
align-items:center;

button{
  padding:7px;
  
  background:none;
  border:none;

  svg{
    
    &:hover{
      color:#3c64ad
  }
  }
  
}


`;
export const Time = styled.span`
  margin:0 25px;
  color: #fff;
  font-weight:bold;
  font-size:20px;
  width:156px;
  max-width:156px;;
`;
export const Appointments = styled.ul`
  display:grid;
  grid-template-columns: repeat(2,1fr);
`;
export const Appointment = styled.li`
  background: rgb(231, 231, 240,0.5);
  margin: 8px 8px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding: 25px;
  
  opacity: ${props=>props.hasAppointment ? 0.5 :1};
  strong{
    margin-bottom:5px;
    font-size:16px;
    font-weight:normal;
    color:${props=>props.hasAppointment ? '#3c64ad' : '#868181'};
  }
  span{
    font-size:14px;
    color:${props=>props.hasAppointment ? '#3c64ad': '#868181'};

  }
`;
