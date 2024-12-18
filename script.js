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
    'amazing-pool': {
        CZK: [
            { id: 'coca-cola', label: 'Coca-Cola', price: 32 },
            { id: 'sprite', label: 'Sprite', price: 32 },
            { id: 'red-bull', label: 'Red Bull', price: 59 }
        ]
    }
};

function updateVillaSettings() {
    const villa = document.getElementById("villa").value;
    const itemsContainer = document.getElementById("villa-items");

    const items = villaItems[villa]?.CZK || [];
    itemsContainer.innerHTML = items
        .map(item => `<label>${item.label} (${item.price} Kč)</label><input id="${item.id}" min="0">`)
        .join('');
}