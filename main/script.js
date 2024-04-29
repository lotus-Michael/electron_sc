/* functions */

    const ball = document.getElementById('ball');
    const square = document.getElementById('square');
    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;

    let x = (window.innerWidth / 2) - (ballWidth / 2);
    let y = window.innerHeight - ballHeight;
    let dx = 5;
    let dy = -5;

    function updateSquare() {
      let side = Math.min(window.innerWidth, window.innerHeight) / 2;
      square.style.width = side + 'px';
      square.style.height = side + 'px';
      square.style.left = (window.innerWidth / 2) - (side / 2) + 'px';
      square.style.top = (window.innerHeight / 2) - (side / 2) + 'px';
    }

    function animateBall() {
      x += dx;
      y += dy;

      if (x <= 0 || x >= window.innerWidth - ballWidth) {
        dx = -dx;
      }
      if (y <= 0 || y >= window.innerHeight - ballHeight) {
        dy = -dy;
      }

      ball.style.left = x + 'px';
      ball.style.top = y + 'px';

      requestAnimationFrame(animateBall);
    }

    window.onresize = function() {
      updateSquare();

      // Проверяем, находится ли шарик за пределами видимой области окна
      if (x < 0) {
        x = 0;
      } else if (x > window.innerWidth - ballWidth) {
        x = window.innerWidth - ballWidth;
      }
      if (y < 0) {
        y = 0;
      } else if (y > window.innerHeight - ballHeight) {
        y = window.innerHeight - ballHeight;
      }
    };

    updateSquare(); // Инициализация размера и позиции квадрата
    requestAnimationFrame(animateBall); // Запуск анимации

  
