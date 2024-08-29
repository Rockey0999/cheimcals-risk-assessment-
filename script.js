function calculateRiskLevel() {
    const chemical = document.getElementById("chemical-select").value;
    let riskLevel, toxicityRisk, accuracy;

    // Example calculations - replace with actual logic
    if (chemical === "Caffeine") {
        riskLevel = "Moderate";
        toxicityRisk = "Low";
        accuracy = "High";
    } else if (chemical === "Nicotine") {
        riskLevel = "High";
        toxicityRisk = "Moderate";
        accuracy = "Medium";
    } else {
        riskLevel = "Unknown";
        toxicityRisk = "Unknown";
        accuracy = "Unknown";
    }

    document.getElementById("risk-level").textContent = `Risk Level: ${riskLevel}`;
    document.getElementById("toxicity-risk").textContent = `Toxicity Risk: ${toxicityRisk}`;
    document.getElementById("accuracy").textContent = `Accuracy: ${accuracy}`;
}
