import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import AvatarPreviewDefault from '~/assets/avataaars.svg';
import { Container } from './styles';
import api from '~/services/api';

export default function Avatar() {
  //constroi um objeto com os dados do campo avatar q está no state = user
  const { defaultValue, registerField } = useField('avatar');
  
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  //cria uma referencia para que o unform q está no arquivo profile/index.js enchergue este valor/ campo
  useEffect(()=>{
      if(ref.current){
        registerField({
          name: 'avatar_id',
          ref: ref.current,
          path: 'dataset.file'
        })
      }
  }, [ref])


  async function handleImageChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);

    const {id, url} = response.data;

    setFile(id);
    setPreview(url);
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || AvatarPreviewDefault} alt="" />
      </label>
      <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} data-file={file} ref={ref} />

    </Container>
  );
}
