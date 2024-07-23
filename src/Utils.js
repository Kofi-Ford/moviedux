import { Account, Client, Databases, Storage } from 'appwrite';

const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT;
const projectId = process.env.REACT_APP_PROJECT_ID;
const dbId = process.env.REACT_APP_DB_ID;
const accountEmail = process.env.REACT_APP_ACCOUNT_EMAIL;
const accountPassword = process.env.REACT_APP_ACCOUNT_PASSWORD;

const appwriteClient = new Client()
	.setEndpoint(serverEndpoint)
	.setProject(projectId);
const appwriteAccount = new Account(appwriteClient);

// Use the credentials of the react-app-user to connect
// to the Appwrite API. Replace `example-password` with
// the password you used when creating the user.
const appwriteAccountPromise = appwriteAccount.createEmailPasswordSession(
	accountEmail,
	accountPassword
);

// Have the response printed to the JavaScript console
// for debugging. You can remove this later.
appwriteAccountPromise.then(console.log('Successfully connected to Appwrite!'));

// Establish the database to use via its ID. Then
// export the database object so that it can be
// imported by other parts of the React project.
export const appwriteDatabase = new Databases(appwriteClient, dbId);
export const appwriteStorage = new Storage(appwriteClient);
