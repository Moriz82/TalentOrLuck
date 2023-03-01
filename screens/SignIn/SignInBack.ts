var database: any = {
  'email': {
    email: 'email@email.com',
    password: 'password',
  },
};

function SignInCheck(email: string, password: string): boolean {
  if (database.hasOwnProperty(email)) {
    if (database[email].password === password) {
      return true;
    }
  }
  return false;
}

export default SignInCheck;
