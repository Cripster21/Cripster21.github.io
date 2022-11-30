import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
  getTasks,
} from "./firebase.js";


const tasksContainer = document.getElementById("tasks-container");

window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const user = doc.data();

      tasksContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
      <h1 class="title">Datos Usuario</h1>
      <h5>RUT:</br><p>${user.rut}</p></h5>
      <h5>Nombre:</br><p>${user.nombre}</p></h5>
      <h5>Apellido Paterno:</br><p>${user.apellidoPaterno}</p></h5>
      <h5>Apellido Materno:</br><p>${user.apellidoMaterno}</p></h5>
      <h5>Dirección:</br><p>${user.direccion}</p></h5>
      <h5>Diagnostico:</br><p>${user.diagnostico}</p></h5>
      <h5>Nombre del Contacto de Emergencia:</br><p>${user.nombreContactoEmergencia}</p></h5>
      <h5>Apellido del Contacto de Emergencia:</br><p>${user.apellidoContactoEmergencia}</p></h5>
      <h5>RUT de Contacto de Emergencia:</br><p>${user.rutContactoEmergencia}</p></h5>
      <h5>Parentesco Familiar:</br><p>${user.parentescoContactoEmergencia}</p></h5>
      <h5>Telefono del Contacto de Emergencia:</br><p>${user.telefonoContactoEmergencia}</p></h5>
    `;
    });
  });
});
