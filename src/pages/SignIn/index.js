import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.svg';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import * as AuthActions from '~/store/modules/auth/actions'
const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('Email é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
});
export default function SignIn() {
  const dispath = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispath(AuthActions.signinRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt='GoBarber' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu melhor e-mail" />
        <Input name="password" type="password" placeholder="Seu senha secreta" />
        <button type="submit" >{loading ?  'Carregando...':  'Acessar'}</button>
        <Link to="/signup" >Criar conta gratuita</Link>
      </Form>
    </>
  );
}