import { Client, Account, Databases, Storage, Avatars } from "appwrite";

// Hardcoded configuration (useful for debugging or testing)
export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "6797189d001436634639",
  databaseId: "67971921000e6cdb46c3",
  storageId: "67971a08002d8f89b00f",
  userCollectionId: "6797b8e7000e215e11b6",
  postCollectionId: "6797b7f800207771d0ce", // Replace this when you have the value
  saveCollectionId: "6797b915002b3e391039", // Replace this when you have the value
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

