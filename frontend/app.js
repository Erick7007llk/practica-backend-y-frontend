formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const contacto = document.getElementById("contacto").value;
    const mensaje = document.getElementById("mensaje").value;

    fetch ("http://localhost:3000/contacto", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            contacto,
            mensaje
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensaje);
        formulario.reset();
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
