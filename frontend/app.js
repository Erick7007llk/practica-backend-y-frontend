const { json } = require("body-parser");

document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();
})
    const nombre = document.getElementById("nombre").value;
    const contacto = document.getElementById("contacto").value;
    const mensaje = document.getElementById("mensaje").value;

    fetch=("https//localhost:3000/contacto",{
      method: "post",
      Headers: {
        "Content-Type": "application/json"
      },
    body: json.stringify()

    
    

    })
 {}