import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md'
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/esm/locale/pt'
import { Container, Badge, NotificationList, Scroll, Notification } from './styles';
import api from '~/services/api';

export default function Notifications() {

  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(x => x.read === false),
    [notifications])

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications');

      const data = response.data.map(notification => ({
        ...notification,
        dateDistance: formatDistance(parseISO(notification.createdAt), new Date(), {
          locale: pt,
          addSuffix: true
        })

      }));

      setNotifications(data);

    }
    loadNotifications();
  }, [])

  async function markAsReadNotification(id) {
    console.log(id);
    await api.put(`/notifications/${id}`);

    setNotifications(notifications.map(notification => 
      notification._id === id ? { ...notification, read: true } :notification
    ));




  }

  const handleToggleVisible = () => {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#3c64ad" size={20} ></MdNotifications>
      </Badge>

      <NotificationList visible={visible} >
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.dateDistance}</time>
              {!notification.read ?

                <button onClick={() => markAsReadNotification(notification._id)} type="button">Marcar como lida</button>
                : ''}

            </Notification>
          ))}


        </Scroll>
      </NotificationList>


    </Container>
  );
}
