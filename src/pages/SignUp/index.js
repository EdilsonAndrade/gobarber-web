import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Input, Form } from '@rocketseat/unform';
import * as Actions from '../../store/modules/auth/actions';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('Email é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória').min(6, "No mínimo 6 caracteres"),
  name: Yup.string().required('Nome é obrigatório')
});

export default function SignUp() {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    const {name, email, password} = data;
    dispatch(Actions.signupRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt='GoBarber' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu melhor e-mail" />
        <Input name="password" type="password" placeholder="Seu senha secreta" />
        <button type="submit" >Cadastrar</button>
        <Link to="/" >Já tenho conta</Link>
      </Form>
    </>
  );
}
