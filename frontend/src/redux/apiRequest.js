import axios from 'axios';
import { updateError, updateStart, updateSuccess } from './userSlice';

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post('/v1/update', user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
}