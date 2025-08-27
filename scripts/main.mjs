// Handles imports and main logic

import { getDogs } from "./api.mjs";
import { renderDogs } from "./ui.mjs";

let currentDogs = []; // Stores the two dogs currently displayed

// Start game
async function startGame() {
    currentDogs = await getDogs(2); // fetch 2 dogs
    renderDogs(currentDogs, handleChoice);
}

// Handle user choice
async function handleChoice(chosenIndex) {
    const chosenDog = currentDogs[chosenIndex];
    const otherDog = currentDogs[1 - chosenIndex];

    console.log(`User chose ${chosenDog.breeds[0].name} over ${otherDog.breeds[0].name}`);

    // Replace the non-chosen dog
    const newDog = await getDogs(1);
    currentDogs[1 - chosenIndex] = newDog[0];

    // Re-render
    renderDogs(currentDogs, handleChoice);
}

// Start app
startGame();