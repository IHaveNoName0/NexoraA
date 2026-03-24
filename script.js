
const animeList = [
  { name: "The Apothecary Diaries", tags: ["mystery", "light", "low"] },
  { name: "Parallel World Pharmacy", tags: ["fantasy", "light", "low"] },
  { name: "Oshi no Ko", tags: ["mystery", "emotional", "low"] },
  { name: "Your Lie in April", tags: ["romance", "emotional", "low"] }
];

document.getElementById("btn").addEventListener("click", recommend);

function recommend() {
  const genre = document.getElementById("genre").value;
  const tone = document.getElementById("tone").value;
  const action = document.getElementById("action").value;

  let results = [];

  animeList.forEach(anime => {
    let score = 0;

    if (anime.tags.includes(genre)) score++;
    if (anime.tags.includes(tone)) score++;
    if (anime.tags.includes(action)) score++;

    if (score > 0) {
      results.push({ name: anime.name, score });
    }
  });

  results.sort((a, b) => b.score - a.score);

  let output = "Top Matches:<br>";

  results.slice(0, 3).forEach(r => {
    output += `- ${r.name} (${r.score}/3 match)<br>`;
  });

  document.getElementById("result").innerHTML = output;
}
