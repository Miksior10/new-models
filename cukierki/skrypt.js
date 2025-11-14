document.addEventListener("DOMContentLoaded", () => {
    const orderBtn = document.getElementById("order-btn");
    const colorBtn = document.getElementById("color-btn");
    const shapeInput = document.getElementById("shape-number");
    const orderResult = document.getElementById("order-result");
    const redInput = document.getElementById("color-r");
    const greenInput = document.getElementById("color-g");
    const blueInput = document.getElementById("color-b");

    if (!orderBtn || !colorBtn || !shapeInput || !orderResult) {
        return;
    }

    orderBtn.addEventListener("click", () => {
        const shapeValue = parseInt(shapeInput.value, 10);
        let shapeName = "inny";

        switch (shapeValue) {
            case 1:
                shapeName = "cytryna";
                break;
            case 2:
                shapeName = "liść";
                break;
            case 3:
                shapeName = "banan";
                break;
            default:
                shapeName = "inny";
        }

        orderResult.textContent = `Twoje zamówienie to cukierek ${shapeName}`;

        const r = clampColorValue(parseInt(redInput.value, 10));
        const g = clampColorValue(parseInt(greenInput.value, 10));
        const b = clampColorValue(parseInt(blueInput.value, 10));

        colorBtn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});

function clampColorValue(value) {
    if (Number.isNaN(value)) {
        return 0;
    }
    return Math.max(0, Math.min(255, value));
}