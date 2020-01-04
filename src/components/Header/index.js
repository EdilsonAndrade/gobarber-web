import React from 'react';
import {Link} from 'react-router-dom';
import Notification from '../Notifications';
import {useSelector} from 'react-redux';
import HeaderLogo from '~/assets/logoheader.svg';
import Avatar from '~/assets/avataaars.svg';

import {Container, Content, Profile} from './styles';
export default function Header() {

  const profile = useSelector(state=>state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={HeaderLogo} alt="gobarber"/>
          <Link to='/dashboard'>DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <img src={profile.avatar ? profile.avatar.url : Avatar} alt='avatar'/>
        </aside>
      </Content>
    </Container>
  );
}
