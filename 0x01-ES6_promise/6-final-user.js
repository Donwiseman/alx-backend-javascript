import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  const promises = [signPromise, uploadPromise];
  return Promise.allSettled(promises).then((result) => {
    const processedResult = result.map((obj) => {
      if (obj.status === 'fulfilled') {
        return {status: obj.status, value: obj.value};
      } else {
        return {status: obj.status, value: obj.reason};
      }
    });
    console.log(processedResult);
    return processedResult;
  });
}
