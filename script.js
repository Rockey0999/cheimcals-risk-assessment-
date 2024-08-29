const chemicalsData = {
    "Caffeine": { LD50: 192, QSAR_Risk: 0.05, Exp_Risk: 0.04 },
    "Aspartame": { LD50: 5000, QSAR_Risk: 0.01, Exp_Risk: 0.005 },
    "Sodium Benzoate": { LD50: 4070, QSAR_Risk: 0.015, Exp_Risk: 0.012 },
    "Paracetamol": { LD50: 338, QSAR_Risk: 0.07, Exp_Risk: 0.06 },
    "Nicotine": { LD50: 50, QSAR_Risk: 0.4, Exp_Risk: 0.35 },
    "Sodium Nitrite": { LD50: 180, QSAR_Risk: 0.08, Exp_Risk: 0.07 },
    "Monosodium Glutamate": { LD50: 15000, QSAR_Risk: 0.005, Exp_Risk: 0.004 },
    "Saccharin": { LD50: 14000, QSAR_Risk: 0.002, Exp_Risk: 0.0015 },
    "Acesulfame K": { LD50: 6000, QSAR_Risk: 0.007, Exp_Risk: 0.0055 },
    "Cyclamate": { LD50: 12000, QSAR_Risk: 0.004, Exp_Risk: 0.0035 },
    "Ibuprofen": { LD50: 636, QSAR_Risk: 0.06, Exp_Risk: 0.055 },
    "Acetaminophen": { LD50: 338, QSAR_Risk: 0.07, Exp_Risk: 0.065 },
    "Ethanol": { LD50: 7060, QSAR_Risk: 0.02, Exp_Risk: 0.018 },
    "Benzene": { LD50: 930, QSAR_Risk: 0.09, Exp_Risk: 0.085 },
    "Formaldehyde": { LD50: 100, QSAR_Risk: 0.3, Exp_Risk: 0.28 },
    "Propylene Glycol": { LD50: 22000, QSAR_Risk: 0.002, Exp_Risk: 0.0015 },
    "Methanol": { LD50: 5628, QSAR_Risk: 0.04, Exp_Risk: 0.035 },
    "Toluene": { LD50: 636, QSAR_Risk: 0.065, Exp_Risk: 0.06 },
    "Chlorpyrifos": { LD50: 82, QSAR_Risk: 0.35, Exp_Risk: 0.32 },
    "Atrazine": { LD50: 672, QSAR_Risk: 0.065, Exp_Risk: 0.06 },
    "Glyphosate": { LD50: 5600, QSAR_Risk: 0.02, Exp_Risk: 0.018 },
    "DDT": { LD50: 113, QSAR_Risk: 0.28, Exp_Risk: 0.25 },
    "Lead Acetate": { LD50: 466, QSAR_Risk: 0.075, Exp_Risk: 0.07 },
    "Sodium Fluoride": { LD50: 52, QSAR_Risk: 0.38, Exp_Risk: 0.36 },
    "Thalidomide": { LD50: 300, QSAR_Risk: 0.09, Exp_Risk: 0.08 }
};

function calculateRiskLevel() {
    const chemical = document.getElementById('chemical-select').value;
    const data = chemicalsData[chemical];

    const riskLevel = (data.Exp_Risk + data.QSAR_Risk) / 2;
    const toxicityRisk = data.Exp_Risk * 1.2;
    const accuracy = ((data.Exp_Risk / data.QSAR_Risk) * 100).toFixed(2);

    document.getElementById('risk-level').innerText = `Risk Level: ${riskLevel.toFixed(6)}`;
    document.getElementById('toxicity-risk').innerText = `Toxicity Risk: ${toxicityRisk.toFixed(6)}`;
    document.getElementById('accuracy').innerText = `Accuracy: ${accuracy}%`;
}
