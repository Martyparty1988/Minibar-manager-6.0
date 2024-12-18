const villaItems = {
    'oh-yeah': {
        CZK: [
            { id: 'budvar', label: 'Budvar', price: 59 },
            { id: 'malibu', label: 'Malibu', price: 99 },
            { id: 'jack-cola', label: 'Jack s colou', price: 99 },
            { id: 'moscow-mule', label: 'Moscow Mule', price: 99 },
            { id: 'gin-tonic', label: 'Gin-Tonic', price: 99 },
            { id: 'mojito', label: 'Mojito', price: 99 },
            { id: 'prosecco', label: 'Prosecco', price: 390 }
        ],
        EUR: [
            { id: 'beer-30l', label: 'Pivo sud 30 l', price: 125 },
            { id: 'beer-50l', label: 'Pivo sud 50 l', price: 175 },
            { id: 'gas', label: 'Plyn', price: 12 },
            { id: 'wellness', label: 'Wellness', price: 'Custom' }
        ]
    },
    'little-castle': {
        CZK: [
            { id: 'budvar', label: 'Budvar', price: 59 },
            { id: 'malibu', label: 'Malibu', price: 99 },
            { id: 'jack-cola', label: 'Jack s colou', price: 99 },
            { id: 'moscow-mule', label: 'Moscow Mule', price: 99 },
            { id: 'gin-tonic', label: 'Gin-Tonic', price: 99 },
            { id: 'mojito', label: 'Mojito', price: 99 },
            { id: 'prosecco', label: 'Prosecco', price: 390 }
        ],
        EUR: [
            { id: 'beer-30l', label: 'Pivo sud 30 l', price: 125 },
            { id: 'beer-50l', label: 'Pivo sud 50 l', price: 175 },
            { id: 'gas', label: 'Plyn', price: 12 },
            { id: 'wellness', label: 'Wellness', price: 'Custom' }
        ]
    },
    'amazing-pool': {
        CZK: [
            { id: 'budvar', label: 'Budvar', price: 59 },
            { id: 'malibu', label: 'Malibu', price: 99 },
            { id: 'jack-cola', label: 'Jack s colou', price: 99 },
            { id: 'moscow-mule', label: 'Moscow Mule', price: 99 },
            { id: 'gin-tonic', label: 'Gin-Tonic', price: 99 },
            { id: 'mojito', label: 'Mojito', price: 99 },
            { id: 'coca-cola', label: 'Coca-Cola', price: 32 },
            { id: 'sprite', label: 'Sprite', price: 32 },
            { id: 'red-bull', label: 'Red Bull', price: 59 },
            { id: 'prosecco', label: 'Prosecco', price: 390 }
        ],
        EUR: [
            { id: 'beer-30l', label: 'Pivo sud 30 l', price: 125 },
            { id: 'beer-50l', label: 'Pivo sud 50 l', price: 175 },
            { id: 'gas', label: 'Plyn', price: 12 },
            { id: 'wellness', label: 'Wellness', price: 'Custom' }
        ]
    }
};

function updateVillaSettings() {
    const villa = document.getElementById("villa").value;
    const currency = document.querySelector('.currency-toggle button.active').textContent;
    const itemsContainer = document.getElementById("villa-items");
    const items = villaItems[villa][currency] || [];

    itemsContainer.innerHTML = items
        .map(item => `<div><label>${item.label} (${item.price} ${currency})</label><input type="number" id="${item.id}" min="0" /></div>`)
        .join('');
    calculateCityTax();
}

function setCurrency(currency) {
    const buttons = document.querySelectorAll('.currency-toggle button');
    buttons.forEach(button => {
        if(button.textContent === currency) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    updateVillaSettings();
}

function calculateCityTax() {
    const guests = parseInt(document.getElementById('guests').value, 10);
    const nights = parseInt(document.getElementById('nights').value, 10);
    const cityTax = guests * nights * 2; // 2 EUR za hosta na noc
    const taxDisplay = document.getElementById('city-tax');
    if (!taxDisplay) {
        const invoiceContainer = document.getElementById('invoiceContainer');
        invoiceContainer.innerHTML += `<div id="city-tax">City Tax: ${cityTax} EUR</div>`;
    } else {
        taxDisplay.textContent = `City Tax: ${cityTax} EUR`;
    }
}

function generateInvoice() {
    // Zde by byla logika pro generování faktury
    console.log("Faktura byla vygenerována.");
}

document.getElementById('villa').addEventListener('change', updateVillaSettings);
document.querySelectorAll('.currency-toggle button').forEach(button => {
    button.addEventListener('click', () => setCurrency(button.textContent));
});
updateVillaSettings(); // Inicializace položek při načtení stránky