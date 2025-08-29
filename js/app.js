// State 
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Data (services)
const services = [
  { name: "জাতীয় জরুরি সেবা", en: "National Emergency", number: "999", category: "সার্বজনীন", icon: "emergency.png" },
  { name: "পুলিশ", en: "Police", number: "999", category: "পুলিশ", icon: "police.png" },
  { name: "ফায়ার সার্ভিস", en: "Fire Services", number: "999", category: "ফায়ার সার্ভিস", icon: "fire-service.png" },
  { name: "অ্যাম্বুলেন্স", en: "Ambulance", number: "১৯৯৪-৯৯৯৯৯", category: "স্বাস্থ্য", icon: "ambulance.png" },
  { name: "নারী ও শিশু সহায়তা", en: "Helpline for Woman & Children", number: "109", category: "সহায়তা", icon: "emergency.png" },
  { name: "দুদক", en: "Anti-Corruption", number: "১০৬", category: "সরকারি", icon: "emergency.png" },
  { name: "বিদ্যুৎ বিভ্রাট", en: "Electricity Outage", number: "16216", category: "বিদ্যুৎ", icon: "emergency.png" },
  { name: "ব্র্যাক", en: "BRAC", number: "16445", category: "এনজিও", icon: "brac.png" },
  { name: "বাংলাদেশ রেলওয়ে", en: "Bangladesh Railway", number: "163", category: "পরিবহন", icon: "Bangladesh-Railway.png" },
];

// Selectors
const cardContainer = document.getElementById("card-container");
const heartCounter = document.getElementById("heart-count");
const coinCounter = document.getElementById("coin-count");
const copyCounter = document.getElementById("copy-count");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

// Render Cards
services.forEach(service => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-2xl shadow-md p-4 border border-gray-200 flex flex-col justify-between";

  card.innerHTML = `
    <div class="flex justify-between items-start">
      <div class="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
        <img src="/heroAssignmentFive/assets/${service.icon}" alt="${service.en}" class="w-8 h-8">
      </div>
      <button class="heart-btn"><img src="/heroAssignmentFive/assets/heart01.png" class="w-5"></button>
    </div>

    <div class="text-left mt-3">
      <h3 class="font-bold text-lg">${service.name}</h3>
      <p class="text-sm text-gray-600">${service.en}</p>
      <p class="text-2xl font-extrabold mt-2">${service.number}</p>
      <span class="mt-2 inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">${service.category}</span>
    </div>

    <div class="flex justify-between gap-2 mt-4">
      <button class="copy-btn flex items-center justify-center gap-1 border border-gray-300 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm w-1/2">
        <img src="/heroAssignmentFive/assets/copy-text.png" alt="copyText" class="w-5"> Copy
      </button>
      <button class="call-btn flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
 Call
      </button>
    </div>
  `;

  // Copy button
  card.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(service.number);
    alert(`Copied: ${service.number}`);
    copyCount++;
    copyCounter.textContent = copyCount;
  });

  // Call button
  card.querySelector(".call-btn").addEventListener("click", () => {
    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coinCount -= 20;
    coinCounter.textContent = coinCount;
    alert(`Calling ${service.en} (${service.number})`);

    // Add to history
    const li = document.createElement("li");
    li.className = "flex justify-between border-b pb-2";
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    li.innerHTML = `<span>${service.number} - ${service.en}</span><span class="text-xs text-gray-500">${time}</span>`;
    historyList.appendChild(li);
  });

  // Heart button
  card.querySelector(".heart-btn").addEventListener("click", () => {
    heartCount++;
    heartCounter.textContent = heartCount;
  });

  cardContainer.appendChild(card);
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
