declare module "express-session" {
  export interface SessionData {
    user: User;
  }
}

class User {
  username: string;
  password: string;
  role: string;
}

export = User;
