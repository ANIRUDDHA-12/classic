const priceSlider = document.getElementById('priceSlider');
        const priceValue = document.getElementById('priceValue');
        const displayButton = document.getElementById('displayButton');

        priceSlider.addEventListener('input', () => {
            const selectedPrice = priceSlider.value;
            priceValue.textContent = selectedPrice;
        });

        displayButton.addEventListener('click', () => {
            const selectedPrice = priceSlider.value;
            alert(`Selected Price Range: $${selectedPrice}`);
        });