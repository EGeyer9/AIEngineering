const jobs = [
  { title: "Mechanical Engineer", icon: "cogs", traditional: "Designs machines and systems like HVAC and engines.", aiIntegration: "Uses generative design tools to automatically propose optimized models for mechanical parts." },
  { title: "Civil Engineer", icon: "city", traditional: "Plans and supervises infrastructure like bridges and buildings.", aiIntegration: "Simulates traffic flow and structural resilience using AI-powered modeling." },
  { title: "Electrical Engineer", icon: "bolt", traditional: "Develops circuits and electronic systems for devices and power.", aiIntegration: "Optimizes PCB layout and power usage with machine learning-based software." },
  { title: "Aerospace Engineer", icon: "plane", traditional: "Designs aircraft, satellites, and propulsion systems.", aiIntegration: "Monitors aircraft sensor data with AI to detect failures before they happen." },
  { title: "Environmental Engineer", icon: "recycle", traditional: "Solves environmental problems like pollution and water quality.", aiIntegration: "Deploys smart sensors and AI to model real-time air/water pollution trends." },
  { title: "Software Engineer", icon: "code", traditional: "Develops software applications, tools, and systems.", aiIntegration: "Uses GitHub Copilot to autocomplete functions and accelerate debugging." },
  { title: "Biomedical Engineer", icon: "heartbeat", traditional: "Designs prosthetics, imaging devices, and medical systems.", aiIntegration: "Collaborates on adaptive AI prosthetics that learn patient gait patterns." },
  { title: "Chemical Engineer", icon: "flask", traditional: "Designs processes for producing fuels, drugs, and materials.", aiIntegration: "Models chemical reactions and predicts new compounds using AI chemistry platforms." },
  { title: "Industrial Engineer", icon: "warehouse", traditional: "Optimizes manufacturing and logistics processes.", aiIntegration: "Uses predictive AI to forecast machine failures and balance production loads." },
  { title: "Materials Engineer", icon: "cube", traditional: "Develops new materials for aerospace, biomedical, and electronics.", aiIntegration: "Trains AI models to find high-performance material blends from datasets." },
  { title: "Automotive Engineer", icon: "car", traditional: "Designs vehicles and their electronic systems.", aiIntegration: "Collaborates on AI-enhanced self-driving features using sensor fusion." },
  { title: "Nuclear Engineer", icon: "radiation", traditional: "Designs and monitors systems involving nuclear energy.", aiIntegration: "Applies AI to watch reactor sensor data and prevent thermal or radiation leaks." }
];

const container = document.getElementById("jobs");

jobs.forEach((job, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.08}s`;

  const icon = document.createElement("i");
  icon.className = `fas fa-${job.icon}`;

  const title = document.createElement("h2");
  title.textContent = job.title;

  const traditional = document.createElement("section");
  traditional.innerHTML = `<span>Traditional Role</span>${job.traditional}`;

  const ai = document.createElement("section");
  ai.className = "ai-info";
  ai.innerHTML = `<span>AI + Human Integration</span>${job.aiIntegration}`;

  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(traditional);
  card.appendChild(ai);

  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
  });

  container.appendChild(card);
});







