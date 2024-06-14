import { uploadPhoto, createUser } from './utils';
// handle multiple promises

export default function handleProfileSignup() {
  const calls = [uploadPhoto, createUser];
  Promise.all(calls.map((call) => call()))
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
