import signUpUser from "./4-user-promise";
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  let signPromise = signUpUser(firstName, lastName);
  let uploadPromise = uploadPhoto(fileName);
  const promises = [ signPromise, uploadPromise ];
  return Promise.allSettled(promises).then((result) => result);
}
