import React from 'react';
import {Form, Input} from '@rocketseat/unform';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileRequest} from '~/store/modules/user/actions';
import {signOut} from '~/store/modules/auth/actions';
import {Container} from './styles';
import AvatarInput from './AvatarInput/index';

export default function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector(state=>state.user.profile);
  function handUpdateProfile(data){
   dispatch(updateProfileRequest({data}));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handUpdateProfile}> 
      <AvatarInput name="avatar_id"/>
        <Input name="name" placeholder="Seu nome completo" />
        <Input type="email" name="email" placeholder="Seu melhor e-mail" />

        <hr/>

        <Input name="oldPassword" type="password" placeholder="Sua senha atual"/>
        <Input name="password" type="password" placeholder="Sua senha atual"/>
        <Input name="confirmPassword" type="password" placeholder="Sua senha atual"/>
        <button type="submit" >Atualizar dados</button>
      </Form>
      <button type="button" onClick={()=>dispatch(signOut())} >Deslogar usuário</button>
    </Container>
  );
}
