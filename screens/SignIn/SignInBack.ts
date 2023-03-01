var database: any = {
  'email@email.com': {
    email: 'email@email.com',
    password: 'password',
  },
};

function SignIn(email: string, password: string): boolean {
  if (database.hasOwnProperty(email)) {
    if (database[email].password === password) {
      return true;
    }
  }
  return false;
}

export default SignIn;
