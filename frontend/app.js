document.getElementById("formcontacto").addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    contacto: document.getElementById("contacto").value,
    mensaje: document.getElementById("mensaje").value
  };

  try {
    const res = await fetch("http://localhost:3000/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }) 
    });

    const respuesta = await res.json(); 
    alert(respuesta.mensaje);  
    document.getElementById("formcontacto").reset();
  } catch (error) {
    console.log(`Error: ${error}`); 
  }
});
