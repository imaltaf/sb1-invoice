import { Client, Account, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://appwrite.codesec.me/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export const databases = new Databases(client);

export { client };