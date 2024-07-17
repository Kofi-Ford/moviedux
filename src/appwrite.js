import { Client, Account } from 'appwrite';

const serverEndpoint = process.env.SERVER_ENDPOINT;
const projectId = process.env.PROJECT_ID;

client.setEndpoint(serverEndpoint).setProject(projectId);

export const client = new Client();
export const account = new Account(client);
