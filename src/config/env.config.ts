import * as dotenv from "dotenv";
export async function setEnvironment() {
  if (process.env.APP_ENV !== "production") {
    dotenv.config();
  }
}
