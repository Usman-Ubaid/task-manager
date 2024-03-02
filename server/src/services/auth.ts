import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePasswords = (userPassword: string, dbPassword: string) => {
  return bcrypt.compare(userPassword, dbPassword);
};

export const generateJWT = (payload: Object) => {
  if (jwtSecret) {
    return jwt.sign({ payload }, jwtSecret);
  }
};

export const verifyJWT = (token: string) => {
  if (jwtSecret) {
    const decode = jwt.verify(token, jwtSecret);
    return decode as JwtPayload;
  }
};
