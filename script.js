// Sample Data (Replace with API or backend integration)
const players = [
    { name: "John Doe", position: "Guard", image: "assets/images/john_doe.jpg" },
    { name: "Jane Smith", position: "Forward", image: "assets/images/jane_smith.jpg" },
];

const games = [
    { date: "Nov 20, 2024", opponent: "Villanova", score: "78-65", highlights: "assets/videos/highlights.mp4" },
    { date: "Nov 15, 2024", opponent: "Butler", score: "84-72", highlights: "assets/videos/highlights.mp4" },
];

// Render Player Profiles
const playerGrid = document.getElementById("player-grid");
players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");
    card.innerHTML = `
        <img src="${player.image}" alt="${player.name}" style="width: 100%">
        <h3>${player.name}</h3>
        <p>Position: ${player.position}</p>
    `;
    playerGrid.appendChild(card);
});

// Render Game Recaps
const recapList = document.getElementById("recap-list");
games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("recap-card");
    card.innerHTML = `
        <h3>${game.date} vs ${game.opponent}</h3>
        <p>Score: ${game.score}</p>
       
