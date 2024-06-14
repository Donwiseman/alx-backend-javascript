// Returns a promise passed user name

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
