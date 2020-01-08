import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
  margin-right: 20px;
`;
export const Badge = styled.button`
  position: relative;
  border: 0;
  background: none;
  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        content: '';
        height: 8px;
        width: 8px;
        top: 0;
        right: 0;
        background: rgb(92.9%, 49.7%, 4.6%);
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible === true ? 'block' : 'none')};

  &::before {
    content: '';
    top: -20px;
    position: absolute;
    width: 0;
    height: 0;
    left: calc(50% - 20px);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;
  font-weight: bold;
  padding: 0 5px;
  font-size: 13px;
  & + div {
    margin-top: 15px;
  }

  time {
    margin: 2px 0;
    font-size: 12px;
    opacity: 0.6;
    display: block;
  }

  button {
    background: ${lighten(0.2, '#3c64ad')};
    border: 0;
    border-radius: 4px;
    padding: 3px;
    color: #fff;
    font-size: 10px;
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        height: 8px;
        width: 8px;
        background: rgb(92.9%, 49.7%, 4.6%);
        border-radius: 50%;
        margin-left: 5px;
      }
    `}
`;
