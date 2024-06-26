// An async function to handle user upload
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user;
  let photo;
  try {
    user = await createUser();
    photo = await uploadPhoto();
  } catch (err) {
    user = null;
    photo = null;
  }
  return { photo, user };
}
