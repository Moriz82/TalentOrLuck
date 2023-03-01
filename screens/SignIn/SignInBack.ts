var database: any = {
  'email': {
    username: 'email',
    email: 'email@email.com',
    password: 'password',
  },
};

function SignInCheck(email: string, password: string): boolean {
  email = email.split('@')[0];
  if (database.hasOwnProperty(email)) {
    if (database[email].password === password) {
      return true;
    }
  }
  return false;
}

export default SignInCheck;
