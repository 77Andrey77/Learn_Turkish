// Правильные слова
  // const correctWords = {
  //   word1: 'Merhaba',
  //   word2: 'Iyiyim',
  //   word3: 'Ederim',
  //   word4: 'Nasılsın',
  //   word5: 'Ederim',
  //   word6: 'Iyiyim',
  //   word7: 'Kal',
  //   word8: 'Güle',
  // };

  // Функция для подсчета различий между двумя строками
  // function countDifferences(str1, str2) {
  //   let differences = 0;
  //   const maxLength = Math.max(str1.length, str2.length);
  //   for (let i = 0; i < maxLength; i++) {
  //     if (str1[i] !== str2[i]) {
  //       differences++;
  //     }
  //   }
  //   return differences;
  // }

  // Функция для проверки слов
  // function checkWords() {
  //   Object.keys(correctWords).forEach(wordId => {
  //     const inputElement = document.getElementById(wordId);
  //     const userWord = inputElement.value.trim().toLowerCase();
  //     const correctWord = correctWords[wordId];
  //     const differences = countDifferences(userWord, correctWord);

  //     inputElement.classList.remove('correct', 'one-error', 'multiple-errors');

  //     if (differences === 0) {
  //       inputElement.classList.add('correct');
  //     } else if (differences === 1) {
  //       inputElement.classList.add('one-error');
  //     } else {
  //       inputElement.classList.add('multiple-errors');
  //     }
  //   });
// }
  

const correctWords1 = ['Merhaba', 'Iyiyim', 'Ederim', 'Nasılsın', 'Ederim', 'Iyiyim', 'Kal', 'Güle'];

const correctWords2 = ['Merhaba', 'Adım', 'Senin', 'Benim', 'Nerelisin', 'Lıyım'];

const correctWords3 = ['Bu', 'Çanta', 'O', 'Ev', 'Değil', 'Bu', 'Şoför', 'O', 'Hemşire','Bu','Perde','Değil','O' ,'Futbolcu','Bu', 'Kutu','Değil','O', 'Mağaza','Bu', 'Market','Değil ','O', 'Şarkıcı'];
   
const correctWords4 = ['Bu', 'Sandalye', 'Mi', 'Bu ', 'Köpek', 'Mi','Şu', 'Sözlük', 'Mü', 'O ', 'Gözlük', 'Mü','O', 'Basketbolcu', 'Mu', 'O', 'Ali', 'Mi','O', 'Ev', 'Hanımı', 'Mı', 'Bu', 'Galata','Kulesi', 'Mi', 'O', 'Domates', 'Mi', 'Onlar','Çocuk', 'Mu'];
                    // ( 39       40       41    42    43       44   45      46     47     48     49        50  51    52             53    54   55     56  57    58    59        60   61      62       63       64   65     66        67    68     69        70   )



    function checkWord(correctWords) {
    return function(event) {
      const input = event.target;
      const userWord = input.value.trim();
      const inputs = Array.from(event.target.form.querySelectorAll('input[type="text"]'));
      const index = inputs.indexOf(input);
      const correctWord = correctWords[index];

      input.classList.remove('correct', 'incorrect');

      if (userWord === correctWord) {
        input.classList.add('correct');
      } else {
        input.classList.add('incorrect');
      }
    };
  }

  // Добавляем обработчик события input для каждого текстового поля в первом наборе
  document.querySelectorAll('#text-form-1 input[type="text"]').forEach((input, index) => {
    input.addEventListener('input', checkWord(correctWords1));
  });

  // Добавляем обработчик события input для каждого текстового поля во втором наборе
  document.querySelectorAll('#text-form-2 input[type="text"]').forEach((input, index) => {
    input.addEventListener('input', checkWord(correctWords2));
  });


// Добавляем обработчик события input для каждого текстового поля в 3 наборе
  document.querySelectorAll('#text-form-3 input[type="text"]').forEach((input, index) => {
    input.addEventListener('input', checkWord(correctWords3));
  });


  // Добавляем обработчик события input для каждого текстового поля в 4 наборе
  document.querySelectorAll('#text-form-4 input[type="text"]').forEach((input, index) => {
    input.addEventListener('input', checkWord(correctWords4));
  });