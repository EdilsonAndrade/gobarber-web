import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailed } from '~/store/modules/user/actions';
import {toast} from 'react-toastify';

function* updateProfileRequest({ payload }) {

  try {
    const { name, email, avatar_id,...rest } = payload.data;
    const profile = Object.assign(
      { name, email, avatar_id},
      rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, '/users', profile);

    toast.success('Perfil atualizado com sucesso');
    
    yield put(updateProfileSuccess(response.data));

  } catch (error) {
    toast.error(`Ocorreu um erro verifique os dados ${error}`);
    yield put(updateProfileFailed());
    
  }

}
export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest)
])