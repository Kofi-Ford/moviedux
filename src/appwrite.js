import { Client, Account } from 'appwrite';

const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT;
const projectId = process.env.REACT_APP_PROJECT_ID;

client.setEndpoint(serverEndpoint).setProject(projectId);

export const client = new Client();
export const account = new Account(client);
