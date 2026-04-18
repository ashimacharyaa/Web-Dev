// --- Form Validation ---
const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', (e) => {
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            e.preventDefault();
            document.getElementById('emailError').innerText = "Please enter a valid email.";
        }
    });
}

// --- Snake Game ---
const canvas = document.getElementById('snakeGame');
if(canvas) {
    const ctx = canvas.getContext('2d');
    let box = 20;
    let snake = [{x: 10 * box, y: 10 * box}];
    let food = { x: Math.floor(Math.random()*19+1)*box, y: Math.floor(Math.random()*19+1)*box };
    let d;
    let score = 0;

    document.addEventListener("keydown", (e) => {
        if(e.keyCode == 37 && d != "RIGHT") d = "LEFT";
        else if(e.keyCode == 38 && d != "DOWN") d = "UP";
        else if(e.keyCode == 39 && d != "LEFT") d = "RIGHT";
        else if(e.keyCode == 40 && d != "UP") d = "DOWN";
    });

    function draw() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for(let i = 0; i < snake.length; i++) {
            ctx.fillStyle = (i == 0) ? "green" : "lime";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
        }

        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if( d == "LEFT") snakeX -= box;
        if( d == "UP") snakeY -= box;
        if( d == "RIGHT") snakeX += box;
        if( d == "DOWN") snakeY += box;

        if(snakeX == food.x && snakeY == food.y) {
            score++;
            document.getElementById('score').innerText = score;
            food = { x: Math.floor(Math.random()*19+1)*box, y: Math.floor(Math.random()*19+1)*box };
        } else {
            snake.pop();
        }

        let newHead = { x: snakeX, y: snakeY };

        // Game Over Rules
        if(snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height) {
            clearInterval(game);
            alert("Game Over! Score: " + score);
            location.reload();
        }

        snake.unshift(newHead);
    }
    let game = setInterval(draw, 100);
}