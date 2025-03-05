document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const predictBtn = document.getElementById("predict");
    const clearBtn = document.getElementById("clear");
    const resultText = document.getElementById("result");

    let drawing = false;

    function initializeCanvas() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function getMousePos(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    function startDrawing(event) {
        drawing = true;
        draw(event);
    }

    function stopDrawing() {
        drawing = false;
        ctx.beginPath();
    }

    function draw(event) {
        if (!drawing) return;
        const { x, y } = getMousePos(event);
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function clearCanvas() {
        initializeCanvas();
        resultText.textContent = "";
    }

    async function sendImage() {
        const imageData = canvas.toDataURL("image/png").split(",")[1];
        const formData = new FormData();
        formData.append("image", new Blob([Uint8Array.from(atob(imageData), c => c.charCodeAt(0))], {type: 'image/png'}));

        try {
            const response = await fetch("/predict", { method: "POST", body: formData });
            const result = await response.json();
            resultText.textContent = "Predicted Digit: " + result.digit;
        } catch (error) {
            resultText.textContent = "Error: Unable to predict";
        }
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchstart", (event) => startDrawing(event.touches[0]));
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchmove", (event) => draw(event.touches[0]));

    clearBtn.addEventListener("click", clearCanvas);
    predictBtn.addEventListener("click", sendImage);

    initializeCanvas();
});
