const generateRandomNumber = () => {
  return Math.round(Math.random() * 10);
};
  
const sum = (num1, num2) => {
  return num1 + num2;
};
  
const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const answer = prompt(`Определите сумму чисел ${randomNumber1} и ${randomNumber2}. Введите ваш ответ:`);
  const correctAnswer = sum(randomNumber1, randomNumber2);
  
  if (answer === '' || answer === ' ') {
    alert("Не оставляйте поле пустым. Введите ответ!")
    return true;
  }
  if (answer === `${correctAnswer}`) {
    alert("Верно!")
    return true;
  } else {
    alert(`Неверно! Правильный ответ: ${correctAnswer}`)
    return false;
  }
};
  
const startGame = () => {
    for (let i = 0; i < 5; i += 1) {
      const isCorrect = startRound();
      if (!isCorrect) {
        alert("В следующий раз используй калькулятор :)");
        return;
      }
    }
    alert("Молодец, уважаешь математику!");
};
