document.addEventListener('DOMContentLoaded', () => {
    const marketData = [
        { crop: 'Wheat', price: 25, change: '+1.5%' },
        { crop: 'Rice (Basmati)', price: 40, change: '-0.8%' },
        { crop: 'Maize', price: 22, change: '+0.9%' },
        { crop: 'Bajra (Pearl Millet)', price: 18, change: '+2.1%' },
        { crop: 'Jowar (Sorghum)', price: 28, change: '-1.2%' },
        { crop: 'Ragi (Finger Millet)', price: 35, change: '+1.8%' },
        { crop: 'Toor Dal (Pigeon Pea)', price: 120, change: '+3.4%' },
        { crop: 'Moong Dal (Green Gram)', price: 85, change: '-2.1%' },
        { crop: 'Chana (Chickpea)', price: 60, change: '+0.7%' },
        { crop: 'Urad Dal (Black Gram)', price: 110, change: '+4.2%' },
        { crop: 'Masoor Dal (Red Lentil)', price: 95, change: '-1.5%' },
        { crop: 'Mustard', price: 55, change: '+2.8%' },
        { crop: 'Soybean', price: 45, change: '-0.5%' },
        { crop: 'Sunflower', price: 65, change: '+1.9%' },
        { crop: 'Groundnut', price: 105, change: '+3.1%' },
        { crop: 'Cotton', price: 75, change: '-0.9%' },
        { crop: 'Sugarcane', price: 32, change: '+0.3%' },
        { crop: 'Turmeric', price: 150, change: '+5.2%' },
        { crop: 'Red Chilli', price: 180, change: '-1.8%' },
        { crop: 'Coriander', price: 90, change: '+2.4%' },
        { crop: 'Cumin', price: 250, change: '+4.7%' },
        { crop: 'Cardamom', price: 1500, change: '-2.3%' },
        { crop: 'Black Pepper', price: 450, change: '+1.1%' },
        { crop: 'Cashew', price: 1200, change: '+0.6%' },
        { crop: 'Coconut', price: 35, change: '-0.4%' },
        { crop: 'Areca Nut', price: 280, change: '+1.7%' },
        { crop: 'Tobacco', price: 220, change: '-0.9%' },
        { crop: 'Potato', price: 15, change: '+8.2%' },
        { crop: 'Onion', price: 28, change: '-12.5%' },
        { crop: 'Tomato', price: 40, change: '+22.1%' },
        { crop: 'Banana', price: 18, change: '+1.3%' },
        { crop: 'Mango', price: 55, change: '-4.2%' },
        { crop: 'Coffee', price: 350, change: '+0.8%' },
        { crop: 'Tea', price: 200, change: '-1.1%' },
        { crop: 'Rubber', price: 180, change: '+0.5%' },
        { crop: 'Jute', price: 65, change: '+1.9%' },
        { crop: 'Saffron', price: 25000, change: '-0.3%' },
        { crop: 'Garlic', price: 80, change: '+7.4%' },
        { crop: 'Ginger', price: 60, change: '-3.1%' },
        { crop: 'Sesame', price: 130, change: '+2.9%' }
    ];

    const tableBody = document.getElementById('marketTableBody');
    marketData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.crop}</td>
            <td>₹${item.price}</td>
            <td>${item.change}</td>
            <td><button class="details-btn" onclick="alert('Details for ${item.crop}')">Details</button></td>
        `;
        tableBody.appendChild(row);
    });
});