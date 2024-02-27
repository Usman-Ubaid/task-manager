import dotenv from "dotenv";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
    }
  }
}
