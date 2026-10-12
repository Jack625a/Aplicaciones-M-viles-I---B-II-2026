// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"; //importal al dependencia de base datos
import {getAuth} from "firebase/auth"; //importa la dependencia de la autentificacion


const firebaseConfig = {
    apiKey: "AIzaSyDBZ5g9nBgIl3FgMdTUw4VnCTlbE9f31XY",
    authDomain: "appi-b-ii2026.firebaseapp.com",
    databaseURL: "https://appi-b-ii2026-default-rtdb.firebaseio.com",
    projectId: "appi-b-ii2026",
    storageBucket: "appi-b-ii2026.firebasestorage.app",
    messagingSenderId: "628614619039",
    appId: "1:628614619039:web:7a4da6153af2069a22a7aa",
    measurementId: "G-2306JGS064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Conexion con  la base de datos (REALTIME DATABASE)
export const database=getDatabase(app);
export const auth=getAuth(app);
