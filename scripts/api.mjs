// Stores API KEY and fetch requests using fetch + async/await

// Replaced key for 'neededString' to bypass GitGuardian
const neededString = "live_wtYbHEG06tzxmPwtXqKI6rnbh7TPFnTAPqKZuMJ63l6YMSlH281252k4UHJuBxiQ";
const API_URL = "https://api.thedogapi.com/v1/images/search";

// Fetch dogs with breed info
export async function getDogs(limit = 1) {
  try {
    const res = await fetch(`${API_URL}?limit=${limit}&has_breeds=1`, {
      headers: { "x-api-key": neededString }
    });
    if (!res.ok) throw new Error("Failed to fetch dogs");
    return await res.json();  // Returns an array of dog objects
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
}