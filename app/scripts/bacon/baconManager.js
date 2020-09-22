const baconLabelCount = document.getElementById('bacon-label-count');
const baconPriceLabel = document.getElementById('bacon-price');
const totalPurchases = document.getElementById('total-purchases');
const baconTaxLabel = document.getElementById('bacon-tax');
const baconTotalLabel = document.getElementById('total-price');

const baconPrice = 10;
const baconTax = 1.25;

let baconCount = 1;
function cloneBacon() {
    const image = document.getElementById('bacon-image');
    const imageContainer = document.getElementById('bacon-container');
    imageContainer.appendChild(image.cloneNode(true));

    baconCount++;

    countBacon();
}

function countBacon() {
    const baconPriceTotal = baconCount * baconPrice;
    const baconTaxTotal = baconCount * baconTax;
    const total = baconPriceTotal + baconTaxTotal;

    baconLabelCount.innerHTML = 'Bacon x' + baconCount;
    baconPriceLabel.innerHTML = '$ ' + baconPriceTotal;
    totalPurchases.innerHTML = '$ ' + baconPriceTotal;
    baconTaxLabel.innerHTML = '$ ' + baconTaxTotal;
    baconTotalLabel.innerHTML = '$ ' + total;
}

export { cloneBacon, countBacon };
