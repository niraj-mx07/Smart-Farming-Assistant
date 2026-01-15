async function loadLanguage(lang) {
    const response = await fetch(`/api/lang/${lang}`);
    const translations = await response.json();

    document.querySelector("#welcome-text").textContent = translations.welcome;
    document.querySelector("#description-text").textContent = translations.description;
    document.querySelector("#market-prices").textContent = translations.market_prices;
    document.querySelector("#weather-update").textContent = translations.weather_update;
    document.querySelector("#govt-schemes").textContent = translations.govt_schemes;
}

document.querySelector("#language-selector").addEventListener("change", function() {
    const selectedLang = this.value;
    localStorage.setItem("language", selectedLang);
    loadLanguage(selectedLang);
});

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    document.querySelector("#language-selector").value = savedLang;
    loadLanguage(savedLang);
});
