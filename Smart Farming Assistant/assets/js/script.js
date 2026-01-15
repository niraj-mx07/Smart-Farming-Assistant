document.querySelector('.eligibility-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const landSize = document.getElementById('landSize').value;
    const income = document.getElementById('income').value;
    alert(`Eligibility Check: Land Size: ${landSize} acres, Income: ₹${income}`);
    // Future: Add real eligibility logic
});