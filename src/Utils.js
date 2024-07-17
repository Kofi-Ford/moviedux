import { Account, Client, Databases } from 'appwrite';

const serverEndpoint = process.env.SERVER_ENDPOINT;
const projectId = process.env.PROJECT_ID;
const dbId = process.env.DB_ID;
const accountEmail = process.env.ACCOUNT_EMAIL;
const accountPassword = process.env.ACCOUNT_PASSWORD;

const appwriteClient = new Client();
const appwriteAccount = new Account(appwriteClient);

// Assign the server's API endpoint and the project ID.
appwriteClient.setEndpoint(serverEndpoint).setProject(projectId);

// Use the credentials of the react-app-user to connect
// to the Appwrite API. Replace `example-password` with
// the password you used when creating the user.
const appwriteAccountPromise = appwriteAccount.createSession(
	accountEmail,
	accountPassword
);

// Have the response printed to the JavaScript console
// for debugging. You can remove this later.
appwriteAccountPromise.then(
	function (response) {
		console.log(response);
	},
	function (error) {
		console.log(error);
	}
);

// Establish the database to use via its ID. Then
// export the database object so that it can be
// imported by other parts of the React project.
export const appwriteDatabase = new Databases(appwriteClient, dbId);
