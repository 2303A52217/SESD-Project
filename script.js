const CAR_INVENTORY = [
    { id: 'camry', name: 'Toyota Camry', type: 'sedan', pricePerDay: 50, available: true, image: 'toyota.jpg' },
    { id: 'crv', name: 'Honda CR-V', type: 'suv', pricePerDay: 75, available: true, image: 'honda.jpg' },
    { id: 'f150', name: 'Ford F-150', type: 'truck', pricePerDay: 90, available: false, image: 'ford.jpg' },
    { id: 'sentra', name: 'Nissan Sentra', type: 'sedan', pricePerDay: 45, available: true, image: 'nissan.jpg' }
];

function displayCarListings(cars) {
    const listingContainer = document.getElementById('car-listings');
    if (!listingContainer) return;

    listingContainer.innerHTML = '<h2>Available Vehicles</h2>';

    cars.forEach(car => {
        if (!car.available) return;

        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Type: ${car.type.toUpperCase()} | Price: $${car.pricePerDay}/day</p>
            <a href="booking.html?car=${car.id}" class="book-btn">Book Now</a>
        `;
        listingContainer.appendChild(card);
    });
}

function setupSearch() {
    const searchForm = document.getElementById('search-form');
    if (!searchForm) return;

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const type = document.getElementById('car-type').value;

        const filteredCars = CAR_INVENTORY.filter(car => 
            (type === '' || car.type === type)
        );
        
        alert(`Searching for ${type ? type.toUpperCase() + 's' : 'All Cars'}...`);
        displayCarListings(filteredCars);
    });
}

function setupBookingPage() {
    const selectedCarEl = document.getElementById('selected-car');
    const bookingForm = document.getElementById('booking-form');
    if (!selectedCarEl || !bookingForm) return;

    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('car');
    
    const selectedCar = CAR_INVENTO_
