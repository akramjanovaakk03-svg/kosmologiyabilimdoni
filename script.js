
const questions = {
  easy: [
    {q:"Quyosh tizimining markazida nima joylashgan?",a:["Oy","Quyosh","Yer","Mars"],c:1,e:"Quyosh tizimining markazida Quyosh joylashgan."},
    {q:"Yerning tabiiy yo‘ldoshi qaysi?",a:["Mars","Venera","Oy","Yupiter"],c:2,e:"Oy Yerning yagona tabiiy yo‘ldoshidir."},
    {q:"Quyosh qanday osmon jismi?",a:["Yulduz","Sayyora","Kometa","Asteroid"],c:0,e:"Quyosh o‘zidan yorug‘lik va issiqlik chiqaradigan yulduzdir."},
    {q:"Quyosh tizimida nechta sayyora bor?",a:["7","8","9","10"],c:1,e:"Quyosh tizimida rasman 8 ta sayyora mavjud."},
    {q:"Qizil sayyora deb qaysi sayyoraga aytiladi?",a:["Saturn","Venera","Mars","Neptun"],c:2,e:"Mars yuzasidagi temir oksidlari unga qizg‘ish rang beradi."},
    {q:"Yer Quyosh atrofini taxminan qancha vaqtda aylanadi?",a:["24 soatda","30 kunda","365 kunda","10 yilda"],c:2,e:"Yer Quyosh atrofidagi bir aylanishini taxminan 365,25 kunda bajaradi."},
    {q:"Eng katta sayyora qaysi?",a:["Yupiter","Yer","Mars","Merkuriy"],c:0,e:"Yupiter Quyosh tizimidagi eng katta sayyoradir."},
    {q:"Halqalari bilan mashhur sayyora qaysi?",a:["Yer","Saturn","Mars","Venera"],c:1,e:"Saturn o‘zining keng va yorqin halqalari bilan mashhur."},
    {q:"Quyoshga eng yaqin sayyora qaysi?",a:["Venera","Yer","Merkuriy","Mars"],c:2,e:"Merkuriy Quyoshga eng yaqin sayyoradir."},
    {q:"Yer atmosferasida eng ko‘p uchraydigan gaz qaysi?",a:["Kislorod","Azot","Karbonat angidrid","Vodorod"],c:1,e:"Yer atmosferasining taxminan 78 foizini azot tashkil etadi."},
    {q:"Yulduzlar asosan nimadan tashkil topgan?",a:["Suvdan","Temirdan","Vodorod va geliydan","Toshdan"],c:2,e:"Yulduzlar asosan vodorod va geliydan iborat issiq gaz plazmasidir."},
    {q:"Yerning shakli qanday?",a:["Mutlaqo tekis","Mukammal kub","Qutblardan biroz yassilangan shar","Uchburchak"],c:2,e:"Yer qutblardan biroz yassilangan geoid shakliga yaqin."}
  ],
  medium: [
    {q:"Galaktikamizning nomi nima?",a:["Andromeda","Somon yo‘li","Magellan","Triangulum"],c:1,e:"Quyosh tizimi Somon yo‘li galaktikasida joylashgan."},
    {q:"Yorug‘lik vakuumda bir soniyada taxminan qancha masofa bosib o‘tadi?",a:["30 000 km","150 000 km","300 000 km","1 000 000 km"],c:2,e:"Yorug‘lik tezligi vakuumda taxminan 299 792 km/s."},
    {q:"Astronomik birlik nimani ifodalaydi?",a:["Yer va Quyosh orasidagi o‘rtacha masofani","Yulduz massasini","Sayyora yoshini","Oy diametrini"],c:0,e:"Astronomik birlik Yer va Quyosh orasidagi o‘rtacha masofaga teng."},
    {q:"Qaysi sayyora o‘z o‘qi atrofida deyarli yonboshlab aylanadi?",a:["Mars","Uran","Yupiter","Merkuriy"],c:1,e:"Uran o‘qining og‘maligi taxminan 98 daraja."},
    {q:"Quyosh energiyasi asosan qaysi jarayon orqali hosil bo‘ladi?",a:["Yonish","Yadro sintezi","Bug‘lanish","Kimyoviy parchalanish"],c:1,e:"Quyosh yadrosida vodorod yadrolari geliyga birikadi."},
    {q:"Quyosh tizimidagi eng katta tabiiy yo‘ldosh qaysi?",a:["Titan","Yevropa","Ganimed","Oy"],c:2,e:"Yupiterning Ganimed yo‘ldoshi Quyosh tizimidagi eng katta yo‘ldoshdir."},
    {q:"Kometa dumining yo‘nalishi odatda nimaga bog‘liq?",a:["Faqat tortishish kuchiga","Quyosh shamoli va nurlanishiga","Yerning aylanishiga","Oy fazalariga"],c:1,e:"Quyosh shamoli va nurlanish bosimi kometa dumini odatda Quyoshdan teskari tomonga yo‘naltiradi."},
    {q:"Asteroidlar kamari qayerda joylashgan?",a:["Yer va Venera orasida","Mars va Yupiter orasida","Saturn va Uran orasida","Quyosh va Merkuriy orasida"],c:1,e:"Asosiy asteroidlar kamari Mars va Yupiter orbitalari orasida joylashgan."},
    {q:"Yulduz yorqinligini o‘rganishda qaysi kattalik qo‘llanadi?",a:["Magnituda","Bosim","Namlik","Zichlik indeksi"],c:0,e:"Astronomiyada yulduz yorqinligi magnituda bilan ifodalanadi."},
    {q:"Oy fazalarining almashishi nimaga bog‘liq?",a:["Oy shaklining o‘zgarishiga","Oy, Yer va Quyoshning o‘zaro joylashuviga","Quyosh haroratiga","Yerning magnit maydoniga"],c:1,e:"Oy fazalari uning Quyosh tomonidan yoritilgan qismining Yerdan ko‘rinishiga bog‘liq."},
    {q:"Qaysi sayyorada Buyuk Qizil Dog‘ mavjud?",a:["Saturn","Mars","Yupiter","Neptun"],c:2,e:"Yupiterdagi Buyuk Qizil Dog‘ ulkan va uzoq davom etayotgan atmosferaviy bo‘rondir."},
    {q:"Ekzoplaneta nima?",a:["Quyosh tizimidagi asteroid","Quyoshdan tashqaridagi yulduz atrofida aylanuvchi sayyora","Kometa turi","Sun’iy yo‘ldosh"],c:1,e:"Ekzoplaneta Quyoshdan boshqa yulduz atrofida aylanadigan sayyoradir."}
  ],
  hard: [
    {q:"Xabbl qonuni nimani ifodalaydi?",a:["Galaktikalar uzoqlashish tezligi masofaga mutanosibligini","Yulduzlar harorati doimiyligini","Sayyoralar massasini","Oy orbitasini"],c:0,e:"Xabbl–Lemittr qonuniga ko‘ra, uzoq galaktikalarning uzoqlashish tezligi masofaga mutanosib."},
    {q:"Oq mitti yulduzlar qanday holatdagi obyektlar?",a:["Yangi tug‘ilgan ulkan yulduzlar","Yulduz evolyutsiyasining zich qoldiqlari","Galaktikalar markazi","Gaz bulutlari"],c:1,e:"Oq mitti — ayrim yulduzlar evolyutsiyasining nihoyatda zich qoldig‘i."},
    {q:"Neytron yulduzlar asosan nimadan tashkil topgan?",a:["Molekulyar vodoroddan","Neytronlarga boy zich moddalardan","Muzdan","Silikatdan"],c:1,e:"Neytron yulduzlarda modda nihoyatda zich bo‘lib, neytronlar katta ulushni tashkil qiladi."},
    {q:"Gravitatsion linzalanish hodisasi nimaga asoslanadi?",a:["Yorug‘likning gravitatsiya ta’sirida egilishiga","Tovushning tezlashishiga","Magnit maydonning yo‘qolishiga","Yulduzlarning portlashiga"],c:0,e:"Massiv obyektlar fazo-vaqtni egadi va yorug‘lik yo‘lini o‘zgartiradi."},
    {q:"Koinotning kosmik mikroto‘lqinli fon nurlanishi nimaning qoldig‘i?",a:["Quyosh chaqnashining","Koinotning ilk issiq davrining","Qora tuynuklar to‘qnashuvining","Yer atmosferasining"],c:1,e:"Kosmik mikroto‘lqinli fon nurlanishi ilk koinotning issiq va zich holatidan qolgan nurlanishdir."},
    {q:"Xeyl–Bopp kometasi qaysi yili Yer osmonida juda yorqin ko‘ringan?",a:["1986","1997","2005","2012"],c:1,e:"Xeyl–Bopp kometasi 1997-yilda juda yorqin ko‘ringan."},
    {q:"Roche chegarasi nimani anglatadi?",a:["Yulduzning eng yuqori haroratini","Yo‘ldoshning to‘lqin kuchlari ta’sirida parchalanishi mumkin bo‘lgan masofani","Galaktika diametrini","Yorug‘lik tezligini"],c:1,e:"Roche chegarasi — katta jismning to‘lqin kuchlari kichik jismni parchalashi mumkin bo‘lgan masofa."},
    {q:"Qora tuynuk hodisalar gorizonti nima?",a:["Uning ko‘rinadigan yuzasi","Ichkaridan yorug‘lik ham tashqariga chiqa olmaydigan chegara","Uning aylanish o‘qi","Gaz buluti"],c:1,e:"Hodisalar gorizonti qora tuynukdan tashqariga qaytish imkonsiz bo‘lgan chegaradir."},
    {q:"Spektral qizil siljish nimani anglatadi?",a:["To‘lqin uzunligining ortishini","Haroratning doim oshishini","Yulduzning yo‘qolishini","Yorug‘likning so‘nishini"],c:0,e:"Qizil siljishda spektr chiziqlari uzunroq to‘lqinlar tomon siljiydi."},
    {q:"Quyoshning asosiy ketma-ketlikdagi yulduz sifatidagi energiya manbai nima?",a:["Uglerod yonishi","Vodorodning geliyga sintezi","Temir parchalanishi","Gravitatsion to‘lqinlar"],c:1,e:"Quyosh hozir yadrosida vodorodni geliyga aylantirmoqda."},
    {q:"Pulsar nima?",a:["Davriy radio yoki boshqa elektromagnit impulslar chiqaruvchi tez aylanuvchi neytron yulduz","Yangi sayyora","Kometa yadrosi","Galaktika turi"],c:0,e:"Pulsarlar — nurlanish dastalari biz tomonga davriy yo‘naladigan neytron yulduzlardir."},
    {q:"Yulduzlararo muhitning asosiy tarkibiy qismlari nimalar?",a:["Gaz va chang","Faqat suyuq suv","Faqat metallar","Muz va tosh"],c:0,e:"Yulduzlararo muhit gaz, chang va boshqa zarrachalardan tashkil topgan."}
  ],
  expert: [
    {q:"Koinotning kritik zichligi nimani belgilaydi?",a:["Koinot geometriyasi bilan bog‘liq zichlik chegarasini","Quyosh massasini","Galaktika rangini","Yulduzlarning yoshini"],c:0,e:"Kritik zichlik kosmologik modelda fazoning katta masshtabdagi geometriyasi bilan bog‘liq."},
    {q:"Kosmologik doimiy Λ umumiy nisbiylik nazariyasida nimani ifodalaydi?",a:["Elektr zaryadini","Fazo energiyasiga o‘xshash hadni","Yulduz radiusini","Magnit oqimini"],c:1,e:"Kosmologik doimiy fazoning vakuum energiyasi bilan bog‘liq ta’sirini ifodalashi mumkin."},
    {q:"CMB haroratining hozirgi o‘rtacha qiymati taxminan qancha?",a:["2,7 K","27 K","270 K","0,27 K"],c:0,e:"Kosmik mikroto‘lqinli fonning o‘rtacha harorati taxminan 2,725 K."},
    {q:"Lambda-CDM modelidagi CDM nimani anglatadi?",a:["Sovuq qorong‘u materiyani","Issiq yulduz gazini","Kosmik changni","Oddiy atomlarni"],c:0,e:"CDM — Cold Dark Matter, ya’ni sovuq qorong‘u materiya."},
    {q:"Baryon akustik tebranishlari nimaga oid izlar?",a:["Ilk koinot plazmasidagi tovush to‘lqinlari izlariga","Qora tuynuk ichidagi tovushga","Quyosh chaqnashlariga","Sayyora magnit maydoniga"],c:0,e:"Baryon akustik tebranishlari ilk koinot plazmasidagi bosim to‘lqinlarining galaktikalar taqsimotida qolgan izlaridir."},
    {q:"Shvarschild radiusi qaysi kattaliklarga bog‘liq?",a:["Faqat haroratga","Jism massasiga","Faqat zaryadga","Yorug‘lik rangiga"],c:1,e:"Shvarschild radiusi sferik, aylanmaydigan va zaryadsiz jism massasi bilan aniqlanadi."},
    {q:"Koinot inflyatsiyasi gipotezasi nimani taklif qiladi?",a:["Ilk koinotda juda qisqa davrda keskin kengayishni","Koinotning to‘xtashini","Quyoshning paydo bo‘lishini","Galaktikalarning yo‘qolishini"],c:0,e:"Inflyatsiya ilk koinotda nihoyatda tez eksponensial kengayish davri bo‘lganini taklif qiladi."},
    {q:"Chandrasekhar chegarasi taxminan qancha quyosh massasiga teng?",a:["0,5","1,4","5","10"],c:1,e:"Chandrasekhar chegarasi taxminan 1,4 Quyosh massasiga teng."},
    {q:"Qorong‘u energiya qanday hodisa bilan bog‘liq?",a:["Koinot kengayishining tezlashishi bilan","Oy tutilishi bilan","Yer magnit qutblari bilan","Quyosh dog‘lari bilan"],c:0,e:"Qorong‘u energiya atamasi koinot kengayishining tezlashishini izohlash uchun ishlatiladi."},
    {q:"Kerr qora tuynugi qanday xususiyatga ega?",a:["Aylanmaydi","Aylanadi","Faqat elektr zaryadiga ega","Faqat gazdan iborat"],c:1,e:"Kerr yechimi aylanuvchi qora tuynukni tasvirlaydi."},
    {q:"Planck masshtabi qaysi fundamental konstantalar bilan bog‘liq?",a:["Faqat yorug‘lik tezligi","Gravitatsion doimiy, Plank doimiysi va yorug‘lik tezligi","Faqat elektron massasi","Faqat Avogadro soni"],c:1,e:"Planck masshtablari G, ħ va c kabi fundamental konstantalardan tuziladi."},
    {q:"Rekombinatsiya davrida ilk koinotda qanday muhim o‘zgarish yuz bergan?",a:["Atom yadrolari elektronlar bilan birikib, neytral atomlar hosil qilgan","Barcha galaktikalar yo‘qolgan","Quyosh tizimi paydo bo‘lgan","Koinot qisqargan"],c:0,e:"Rekombinatsiya davrida elektronlar yadrolar bilan birikib neytral atomlar hosil qilgan va fotonlar erkin tarqala boshlagan."}
  ]
};

const names = {
  easy: "Oson daraja",
  medium: "O‘rta daraja",
  hard: "Qiyin daraja",
  expert: "Ekspert darajasi"
};

const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

let selectedLevel = "easy";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz(level) {
  selectedLevel = level;
  currentQuestions = shuffle(questions[level]).slice(0, 10);
  currentIndex = 0;
  score = 0;

  home.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");

  document.getElementById("levelName").textContent = names[level];
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];

  document.getElementById("counter").textContent =
    `${currentIndex + 1} / 10`;

  document.getElementById("questionNumber").textContent =
    `SAVOL ${String(currentIndex + 1).padStart(2, "0")}`;

  document.getElementById("question").textContent = q.q;
  document.getElementById("progressBar").style.width =
    `${(currentIndex + 1) * 10}%`;

  const options = q.a.map((text, index) => ({
    text,
    correct: index === q.c
  }));

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  shuffle(options).forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = `${"ABCD"[index]}. ${option.text}`;
    button.addEventListener("click", () => checkAnswer(button, option, q));
    answers.appendChild(button);
  });

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");
}

function checkAnswer(button, option, question) {
  if (answered) return;
  answered = true;

  const allButtons = document.querySelectorAll(".answer");
  allButtons.forEach(btn => btn.disabled = true);

  const feedback = document.getElementById("feedback");

  if (option.correct) {
    score++;
    button.classList.add("correct");
    feedback.innerHTML = "✓ To‘g‘ri javob!<br>" + question.e;
  } else {
    button.classList.add("wrong");
    const correctButton = [...allButtons].find(btn =>
      btn.textContent.slice(3) === question.a[question.c]
    );
    if (correctButton) correctButton.classList.add("correct");
    feedback.innerHTML = "✗ Noto‘g‘ri javob.<br>To‘g‘ri javob: " +
      question.a[question.c] + "<br>" + question.e;
  }

  feedback.classList.remove("hidden");
  const next = document.getElementById("nextBtn");
  next.textContent = currentIndex === 9 ? "Natijani ko‘rish →" : "Keyingi savol →";
  next.classList.remove("hidden");
}

function finishQuiz() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  document.getElementById("finalScore").textContent = `${score}/10`;

  let title = "Yaxshi harakat!";
  let message = "Yana mashq qiling, natijangiz yanada oshadi.";

  if (score === 10) {
    title = "Mukammal natija!";
    message = "Ajoyib! Siz barcha savollarga to‘g‘ri javob berdingiz!";
  } else if (score >= 8) {
    title = "Ajoyib natija!";
    message = "Koinot haqidagi bilimlaringiz juda yaxshi!";
  } else if (score >= 6) {
    title = "Yaxshi natija!";
    message = "Sizda yaxshi bilim bor, yana davom eting!";
  }

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultText").textContent = message;

  const key = `cosmologyBest_${selectedLevel}`;
  const best = Number(localStorage.getItem(key) || 0);

  if (score > best) {
    localStorage.setItem(key, score);
  }

  updateBest();
}

function updateBest() {
  const best = Math.max(
    ...Object.keys(names).map(level =>
      Number(localStorage.getItem(`cosmologyBest_${level}`) || 0)
    )
  );
  document.getElementById("bestScore").textContent = `${best}/10`;
}

document.querySelectorAll(".level").forEach(button => {
  button.addEventListener("click", () => startQuiz(button.dataset.level));
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < 10) showQuestion();
  else finishQuiz();
});

document.getElementById("backBtn").addEventListener("click", () => {
  quiz.classList.add("hidden");
  home.classList.remove("hidden");
});

document.getElementById("restartBtn").addEventListener("click", () => {
  startQuiz(selectedLevel);
});

document.getElementById("homeBtn").addEventListener("click", () => {
  result.classList.add("hidden");
  home.classList.remove("hidden");
  updateBest();
});

updateBest();
