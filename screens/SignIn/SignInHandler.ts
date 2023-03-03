import { setUserdata, userdata } from "../../App";


var database: any = {
  'email': {
    username: 'email',
    email: 'email@email.com',
    password: 'password',
  },
};

export function signInCheck(email: string, password: string): boolean {
  const username = email.split('@')[0];

  if (database.hasOwnProperty(username)) {
    if (database[username].password === password) {
      setUserdata(username, email, password);
      return true;
    }
  }
  return false;
}


export function registerUser(email: string, password: string, confirmPassword: string): {didRegister: boolean, err: string} {
  const username = email.split('@')[0];

  if (password === confirmPassword) {
    if (!database.hasOwnProperty(username)) {
      database[username] = {
        username: username,
        email: email,
        password: password
      };
      return {didRegister: true, err: ""};
    }
    return {didRegister: false, err: "user is already registered"};
  }
  return {didRegister: false, err: "passwords do not match"};

}
