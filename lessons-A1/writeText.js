
  

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
             ['ıyorum', 'iyoruz', 'ıyorlar', 'ıyorum', 'iyorlar', 'ıyorsun', 'iyorsunuz', 'uyorsunuz', 'üyoruz', 'ıyorum',],
         //(     242      243       244        245         246       247        248         248           249      250)
             ['Konuşmuyorlar', 'Bilmiyorum', 'Beklemiyoruz', 'Yemiyorum', 'Uyumuyor', 'Okumuyorlar', 'Çalışmıyorum', 'Yüzmüyorlar', 'Gitmiyoruz', 'Etmiyor'],
      //(       251               252          253              254          255          256             257            258           259           260)  
             ['Muyorlar', 'Muyoruz', 'Miyorlar', 'Miyorsun', 'Mıyor', 'Müyor ', 'Muyorlar', 'Muyor', 'Miyor', 'Muyorum'],
    //(        261           262         263          264      265      266       267         268      269       270)  
             
             ['yor', 'musun', 'sunuz', 'musun', 'mıyorsun', 'liyor', 'mu', 'iyor', 'musunuz', 'iyor', 'mu', 'ıyorsun', 'iyor', 'musunuz', 'ıyorsun'],
             //(19    271      272     273      274       275         276    277     278     279       280    281     282       283     284         285   ) 
             
              ['tatile', 'dolaba','mutfağa', 'okula', "türkiye'ye" , 'lokantaya', 'bana', 'size', 'uçağa', 'eve'],
//ders8-2 20 (   286        287       288       289        290           291          292     293     294     295 )     
             
             ['otobüsten', 'işten', 'yataktan', 'okuldan', 'pencereden', "ıtalya'dan", 'sahilden', 'uçaktan', 'senden', "Antalya'dan"] ,
    //21  (      296         297        298      299          300             301         302        303        304        305         )  
             
                ['de', 'e', 'de', 'den', 'e', 'e', 'ta', 'de', 'den', 'tan', 'a', 'da', 'dan', 'e', 'e', 'a'],
//       22(     306   307   308   309   310  311  312    313   314    315    316  317  318    319   320  321)  
             
                 ['Fincandan', 'Şişeden', 'Işten', 'Bardaktan', 'Bankadan', 'Okuldan'],
//ders8-7  23(       322          323         324     325         326         327  )      
             
                ['da', 'de', 'ya', 'dan', 'da', 'da', 'ya', 'e', 'da', 'te', 'ten', 'den', 'ye', 'da'],
//ders8-10  24(   328    329   330   331    332   333   334  335   336   337   338    339    340   341)  
              
                  ['in', 'ın', 'nun', 'sı', 'im', 'imiz', 'ın', 'i', 'in', 'unuz', 'im', 'ım', 'nun', 'sı', 'in', 'nda', 'in', 'ınız', 'im', 'mizde'],
//ders10-1 25(     342   343   344     345   346    347    348  349   350    351    352   353   354    355   356   357    358    359     360   361 ) 
                  
                  ['im', 'iniz', 'sı', 'niz', 'u', 'ımız', 'in', 'imiz','n', 'm'],
//ders10-3  26(     362   363     364   365   366   367     368   369   370   371  ) 
                
                  ['mda', 'mizde', 'inden', 'inizde', 'sından', 'mıza', 'ına', 'sine', 'imize', 'inden'],
//ders10-4  27   (  372    373      374       375       376       377     378    379     380      381)         

                  ['sandalyemde','çantanda', 'köpeğinizden', 'evimizde', 'ofisinizde','evinde', 'evime','gözlerime', 'öğretmenlerimize','arkadaşlarıma'],
//ders10-4  28   (    382           383            384           385          386        387      388      389           390                391)         
                 
                  ['im', 'ım', 'im', 'um', 'a', 'im', 'im', 'im', 'im', 'a', 'ım', 'ın', 'ları', 'sinde', 'im', 'm', 'im', 'im', 'ın', 'ları', 'nun', 'leri', 'im', 'm', 'm', 'nun', 'si', 'im', 'imiz', 'nun','ı', 'un','i', 'leri','ın', 'ı','a', 'ım','ya'],
//ders10-t9  29 (   392  393    394   395   396 397   398    399   400   401  402  403    404     405      406   407  408   409   410    411    412     413    414  415  416   417     418  419    420    421  422  423   424   425   426  427  428  429  430      )
] ;

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
    