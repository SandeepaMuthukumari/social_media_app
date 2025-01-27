import { Client, Account, Databases, Storage, Avatars } from "appwrite";

// Hardcoded configuration (useful for debugging or testing)
export const appwriteConfig = {
  url: "http://localhost:5173",
  projectId: "6797189d001436634639",
  databaseId: "67971921000e6cdb46c3",
  storageId: "67971a08002d8f89b00f",
  userCollectionId: "67971b4b003b6a41a6a7",
  postCollectionId: "", // Replace this when you have the value
  savesCollectionId: "", // Replace this when you have the value
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

