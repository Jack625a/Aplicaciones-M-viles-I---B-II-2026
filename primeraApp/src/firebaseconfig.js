// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Conexion con  la base de datos (REALTIME DATABASE)
export const database=getDatabase(app);
