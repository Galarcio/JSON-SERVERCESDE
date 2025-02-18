import { db } from "./firebase.js";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Crear un nuevo usuario
const createUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Jhoan galarcio",
      email: "jhoangalarcio@example.com",
    });
    console.log("Usuario creado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al crear el usuario: ", e);
  }
};

// Obtener todos los usuarios
const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
};

// Actualizar un usuario
const updateUser = async () => {
  const userRef = doc(db, "users", "ID_DEL_USUARIO"); // Reemplaza con el ID del usuario
  await updateDoc(userRef, {
    name: "John Updated",
    email: "johnupdated@example.com",
  });
  console.log("Usuario actualizado");
};

// Eliminar un usuario
const deleteUser = async () => {
  await deleteDoc(doc(db, "users", "ID_DEL_USUARIO")); // Reemplaza con el ID del usuario
  console.log("Usuario eliminado");
};

// Ejecutar funciones
createUser();
getUsers();
updateUser();
deleteUser();