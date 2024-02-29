import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65dedcff9fc1f5555b01');

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
