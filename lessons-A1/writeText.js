
  

// const correctWords1 = ['Merhaba', 'Iyiyim', 'Ederim', 'Nasılsın', 'Ederim', 'Iyiyim', 'Kal', 'Güle'];

// const correctWords2 = ['Merhaba', 'Adım', 'Senin', 'Benim', 'Nerelisin', 'Lıyım'];

// const correctWords3 = ['Bu', 'Çanta', 'O', 'Ev', 'Değil', 'Bu', 'Şoför', 'O', 'Hemşire','Bu','Perde','Değil','O' ,'Futbolcu','Bu', 'Kutu','Değil','O', 'Mağaza','Bu', 'Market','Değil ','O', 'Şarkıcı'];
   
// const correctWords4 = ['Bu', 'Sandalye', 'Mi', 'Bu ', 'Köpek', 'Mi','Şu', 'Sözlük', 'Mü', 'O ', 'Gözlük', 'Mü','O', 'Basketbolcu', 'Mu', 'O', 'Ali', 'Mi','O', 'Ev', 'Hanımı', 'Mı', 'Bu', 'Galata','Kulesi', 'Mi', 'O', 'Domates', 'Mi', 'Onlar','Çocuk', 'Mu'];
                    // ( 39       40       41    42    43       44   45      46     47     48     49        50  51    52             53    54   55     56  57    58    59        60   61      62       63       64   65     66        67    68     69        70   )
// const correctWords5 = ['Burası', 'Kim', 'Mü', 'Evet', 'Değil'];
                  // (  71        72     73    74      75)
// const correctWords6 = ['Özlük', 'Alem', 'Elefon', 'İlgisayar', 'Efter', 'Anta', 'Itap', 'Aat', 'Andalye', 'Asa'];
                  //   (76        77       78        79          80       81      82       83     84        85)
// const correctWords7 = ['Otuz', 'Sekiz', 'Elli', 'Yedi', 'Yüz', 'Otuz', 'Bir', 'Beş', 'Doksan', 'Dokuz', 'Yüz', 'Doksan', 'Iki', 'Doksan', 'Dokuz', 'Yüz', 'Doksan', 'Altmış', 'Altı', 'Bin', 'Yüz'];
//                   (  86       87        88      89     90     91      92    93        94       95      96       97       98     99        100    101     102       103      104      105    106  )
// const correctWords8 = ['Onuncu', 'Dokuzuncu', 'Sekizinci', 'Yedinci', 'Altıncı', 'Beşinci', 'Dördüncü', 'Üçüncü', 'Ikinci', 'Birinci'];
                // (      107      108            109         110         111         112        113          114      115         116)
// const correctWords9 = ['Derya', 'Yedinci', 'Otuz', 'Dört', 'Seksen', 'Dört', 'Altmış ', 'Yedi', 'Yirmi ', 'Dokuz', 'Dört', 'Üç', 'Yüz', 'On', 'Beş'];
                 //  (  117       118        119     120      121      122     123       124       125      126      127     128   129   130   131 )
// const correctWords10 = ['Neredesin', 'Nerelisiniz', 'Bu', 'Kitap', 'Güzel', 'Mi', 'Sinan', 'Sinirli', 'Mi', 'Kaç', 'Yaşındasın'];
                   // (   132           133          134    135       136   137    138       139       140   141       142)
// const correctWords11 = ['Biz', 'Kafede', '', '', '', '', '', '', '', '', ''];



// function checkWord(correctWords) {
//     return function(event) {
//       const input = event.target;
//       const userWord = input.value.trim();
//       const inputs = Array.from(event.target.form.querySelectorAll('input[type="text"]'));
//       const index = inputs.indexOf(input);
//       const correctWord = correctWords[index];

//       input.classList.remove('correct', 'incorrect');

//       if (userWord === correctWord) {
//         input.classList.add('correct');
//       } else {
//         input.classList.add('incorrect');
//       }
//     };
//   }

  // Добавляем обработчик события input для каждого текстового поля в первом наборе
  // document.querySelectorAll('#text-form-1 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords1));
  // });

  // Добавляем обработчик события input для каждого текстового поля во втором наборе
  // document.querySelectorAll('#text-form-2 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords2));
  // });


// Добавляем обработчик события input для каждого текстового поля в 3 наборе
  // document.querySelectorAll('#text-form-3 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords3));
  // });


  // Добавляем обработчик события input для каждого текстового поля в 4 наборе
  // document.querySelectorAll('#text-form-4 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords4));
  // });

  // Добавляем обработчик события input для каждого текстового поля в 5 наборе
  // document.querySelectorAll('#text-form-5 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords5));
  // });

   // Добавляем обработчик события input для каждого текстового поля в 6 наборе
  // document.querySelectorAll('#text-form-6 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords6));
  // });

   // Добавляем обработчик события input для каждого текстового поля в 7 наборе
  // document.querySelectorAll('#text-form-7 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords7));
  // });

   // Добавляем обработчик события input для каждого текстового поля в 8 наборе
  // document.querySelectorAll('#text-form-8 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords8));
  // });

  // Добавляем обработчик события input для каждого текстового поля в 9 наборе
  // document.querySelectorAll('#text-form-9 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords9));
  // });

  // Добавляем обработчик события input для каждого текстового поля в 10 наборе
  // document.querySelectorAll('#text-form-10 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords10));
  // });

  // Добавляем обработчик события input для каждого текстового поля в 11 наборе
  // document.querySelectorAll('#text-form-11 input[type="text"]').forEach((input, index) => {
  //   input.addEventListener('input', checkWord(correctWords11));
// });
  




const correctWordsSets = [
            ['Merhaba', 'Iyiyim', 'Ederim', 'Nasılsın', 'Ederim', 'Iyiyim', 'Kal', 'Güle'],
            ['Merhaba', 'Adım', 'Senin', 'Benim', 'Nerelisin', 'Lıyım'],
            ['Bu', 'Çanta', 'O', 'Ev', 'Değil', 'Bu', 'Şoför', 'O', 'Hemşire','Bu','Perde','Değil','O' ,'Futbolcu','Bu', 'Kutu','Değil','O', 'Mağaza','Bu', 'Market','Değil ','O', 'Şarkıcı'],
            ['Bu', 'Sandalye', 'Mi', 'Bu ', 'Köpek', 'Mi','Şu', 'Sözlük', 'Mü', 'O ', 'Gözlük', 'Mü','O', 'Basketbolcu', 'Mu', 'O', 'Ali', 'Mi','O', 'Ev', 'Hanımı', 'Mı', 'Bu', 'Galata','Kulesi', 'Mi', 'O', 'Domates', 'Mi', 'Onlar','Çocuk', 'Mu'],
            ['Burası', 'Kim', 'Mü', 'Evet', 'Değil'],
            ['Özlük', 'Alem', 'Elefon', 'İlgisayar', 'Efter', 'Anta', 'Itap', 'Aat', 'Andalye', 'Asa'],
            ['Otuz', 'Sekiz', 'Elli', 'Yedi', 'Yüz', 'Otuz', 'Bir', 'Beş', 'Doksan', 'Dokuz', 'Yüz', 'Doksan', 'Iki', 'Doksan', 'Dokuz', 'Yüz', 'Doksan', 'Altmış', 'Altı', 'Bin', 'Yüz'],
            ['Onuncu', 'Dokuzuncu', 'Sekizinci', 'Yedinci', 'Altıncı', 'Beşinci', 'Dördüncü', 'Üçüncü', 'Ikinci', 'Birinci'],
            ['Derya', 'Yedinci', 'Otuz', 'Dört', 'Seksen', 'Dört', 'Altmış', 'Yedi', 'Yirmi', 'Dokuz', 'Dört', 'Üç', 'Yüz', 'On', 'Beş'],
            ['Neredesin', 'Nerelisiniz', 'Bu', 'Kitap', 'Güzel', 'Mi', 'Sinan', 'Sinirli', 'Mi', 'Kaç', 'Yaşındasın'],
             //(132           133          134    135     136     137    138       139       140   141       142)
            ['Sekreterim', 'Öğrenci', 'Misiniz', 'Güzel', 'Miyiz', 'Şişmansınız', 'Tatildeler', 'Mi', 'Uzun', 'Değil', 'Mi', 'Evdeyiz', 'Müsait', 'Misin', 'Mutluyuz', 'Işte', 'Misiniz', 'Yakışıklı', 'Ucuz', 'Mu', 'Okulda', 'Değiller', 'Var', 'Mı', 'Iş', 'Adamısın', 'Evde', 'Değiller', 'Mi', 'Dışarıdayım', 'Iyi', 'Değilsin', 'İzmirli', 'Mi', 'Tembeliz', 'Hasta', 'Değil', 'Misin', 'Uzak', 'Değil', 'Mutlu', 'Değil', 'Misin', 'Kalabalık', 'Değil', 'Mi', 'Ilginç', 'Değil', 'Yokuz', 'Doktor', 'Musun', 'Pahalı', 'Değil', 'Mi'],
    //(          143           144       145         146     147       148            149        150     151    152     153     154        155      156      157          158     159        160          161    162    163      164         165    166   167   168          169     170        171     172          173     174         175       176    177        178      179       180      181    182       183      184      185      186         187      188    189      190       191     192         193     194       195     196    )
            ['Yorgun', 'Musunuz', 'Kaç', 'Yaşındasınız', 'Bugün', 'Evde', 'Misin', 'Tuzlu', 'Mu', 'Neredesiniz', 'Ekmek', 'Var', 'Mı', 'Doktor', 'Musun', 'Kaç', 'Öğrenci', 'Var', 'Evli', 'Misin', 'Kaçıncı ', 'Katta'],
        //(    197        198      199      200            201       202     203      204     205       206          207     208   209    210       211      212     213      214    215     216      217          218      )
            ['Okuyor', 'Konuşuyor', 'Bekliyor', 'Güneşleniyor', 'Uyuyor', 'Kullanıyor', 'Başlıyor'],
     //(       218       219            220        221             222       223          224)
            ['Giyinmiyor', 'Öpmüyor', 'Çalmıyor', 'Kalkmıyor', 'Gecikmiyor', 'Tanımıyor', 'Yatmıyor'],
          //( 225             226       227         228          229            230          231)  
            ['Yaşıyor', 'Mu', 'Kalkıyor', 'Çalışıyor', 'Mu', 'Yapıyor', 'Yapıyor', 'Mu', 'Buluşuyor', 'Mu'],
          //(232         233     234        235         236    237         238      239     240        241)  
];

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

        correctWordsSets.forEach((correctWords, setIndex) => {
            document.querySelectorAll(`#text-form-${setIndex + 1} input[type="text"]`).forEach(input => {
                input.addEventListener('input', checkWord(correctWords));
            });
        });
    