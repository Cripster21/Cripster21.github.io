// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsulhG3d9VEf6HFQ3ektR-NOclLV0j7eQ",
  authDomain: "helpex-367418.firebaseapp.com",
  projectId: "helpex-367418",
  storageBucket: "helpex-367418.appspot.com",
  messagingSenderId: "76652786593",
  appId: "1:76652786593:web:7362f504b10dc2cf7451e0",
  measurementId: "G-Q7E42R89KF"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} apellidoContactoEmergencia
 * @param {string} apellidoMaterno
 * @param {string} apellidoPaterno
 * @param {string} diagnostico
 * @param {string} direccion
 * @param {string} nombre
 * @param {string} nombreContactoEmergencia
 * @param {string} parentescoContactoEmergencia
 * @param {string} rut
 * @param {string} rutContantoEmergencia
 * @param {string} telefonoContactoEmergencia
 */
export const saveTask = (apellidoContactoEmergencia, apellidoMaterno, apellidoPaterno, diagnostico, direccion, nombre, nombreContactoEmergencia, rut, rutContantoEmergencia, telefonoContactoEmergencia) =>
  addDoc(collection(db, "user"), {apellidoContactoEmergencia, apellidoMaterno, apellidoPaterno, diagnostico, direccion, nombre, nombreContactoEmergencia, rut, rutContantoEmergencia, telefonoContactoEmergencia });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "user"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "user", id));

export const getTask = (id) => getDoc(doc(db, "user", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "user", id), newFields);

export const getTasks = () => getDocs(collection(db, "user"));
