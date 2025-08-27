// Updates DOM (render dogs, buttons, results).

const container = document.getElementById("dog-container");

// Render dogs into clickable cards
export function renderDogs(dogs, onChoose) {
    container.innerHTML = "";

    dogs.forEach((dog, index) => {
        const div = document.createElement("div");
        div.className = "dog-card";

        // Dog image + breed name
        div.innerHTML = `
      <img src="${dog.url}" alt="${dog.breeds[0].name}" />
      <p>${dog.breeds[0].name}</p>
    `;
        div.onclick = () => onChoose(index);
        container.appendChild(div);
    });
}