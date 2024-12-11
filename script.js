document.addEventListener("DOMContentLoaded", () => {
    fetch("instances.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById("instances-container");
            container.innerHTML = "";

            if (data.length === 0) {
                container.textContent = "No hay instancias disponibles.";
                return;
            }

            data.forEach(instance => {
                const div = document.createElement("div");
                div.className = "instance";
                div.innerHTML = `<strong>Nombre:</strong> ${instance.name} <br>
                                 <strong>Motor:</strong> ${instance.engine}`;
                container.appendChild(div);
            });
        })
        .catch(error => {
            document.getElementById("instances-container").textContent = "Error al cargar los datos.";
            console.error(error);
        });
});
