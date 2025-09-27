const trainees = [
{
        name: "اللواء حسام عكاشة",
        img: "./imgs/ho-ok.jpg",
        size: Math.floor(Math.random() * (70)) + 120,
        msg:"في كل موقف، كنت القائد الذي يُحتذى، والمسؤول الذي يحمل الأمانة بضميرٍ حيّ ورؤيةٍ ناضجة. لم تكن إدارتك فقط توجيهًا، بل كانت إلهامًا ودافعًا لنا لنقدّم أفضل ما لدينا. لقد أثبت أن القيادة ليست منصبًا، بل تأثيرٌ إيجابيٌّ يُحدث فرقًا.✨"
    },
        {
        name: "د. نجلاء عمر",
        img: "./imgs/ng-om.jpg",
        size: Math.floor(Math.random() * (70)) + 100,
        msg: "فخورة بكل خطوة قطعتها، وبكل لحظة اجتهدت فيها، وما زلت أكتب قصتي بكل قوة وثقة.✨"
    },
    {
        name: "إيناس سعيد",
        img: "./imgs/en-sa.jpg",
        size: Math.floor(Math.random() * (70)) + 100,
        msg: "كنتِ نجمة ساطعة في رحلتنا 🌟 حضورك أضفى لمسة من الجمال والتميز. استمري في التألق، فأنتِ بالفعل مصدر إلهام!✨"
    },
    {
        name: "منى عصام",
        img: "./imgs/mo-es.jpg",
        size: Math.floor(Math.random() * (70)) + 100,
        msg: "إبداعك لا يُضاهى وروحك الإيجابية تضيء كل من حولك 🌼 حافظي على هذا النور في قلبك، فالعالم بحاجة لابتسامتك وأفكارك المتألقة! 💡"
    },
    {
        name: " محمد فوائد",
        img: "./imgs/mo-fo.jpg",
        size: Math.floor(Math.random() * (70)) + 100,        
        msg: "كنت مثالاً للطاقة والروح الحماسية التي تُشعل العزيمة في الآخرين 🔥 لا تتوقف عن بث هذه الإيجابية، فأنت قائد بالفطرة! 🚀"
    },{
        name:"م. كريم سليمان",
        img: "./imgs/ka-so.jpg",
        size: Math.floor(Math.random() * (70)) + 100,        
        msg: "أخلاقك واحترامك يسبقانك دائمًا. حضورك كان مزيجًا رائعًا من التواضع والرقي. ستظل بصمتك محفورة في قلوب الجميع 🌟"
    },{
        name:"أسماء محمد ",
        img: "./imgs/as-mo.jpg",
        size: Math.floor(Math.random() * (70)) + 100,        
        msg: "كنتِ دائمًا مثالًا في الالتزام والاحترام. حضورك أضاف الكثير من الإيجابية للمكان. نتمنى لك دوام التوفيق والنجاح في كل خطواتك القادمة 🌿"
    }
    ,
    {
        name:"م. محمد الهلالي",
        img: "./imgs/mo-hel.jpg",
        size: Math.floor(Math.random() * (70)) + 100,        
        msg: " أنت قدوة في الخُلق والهدوء والتفكير الراقي. وجودك كان يضيف التوازن والاحترام للمكان. لا تتوقف عن التميز 🌿"
    },{
        name:"العقيد محمد حافظ",
        img: "./imgs/mo-ha.jpg",
        size: Math.floor(Math.random() * (70)) + 100,        
        msg: "سيادة العقيد، كنت دومًا مثالًا في الانضباط والرُقي. نفتخر بأننا تعلمنا من خبرتكم وتواضعكم. لكم منّا كل التقدير والاحترام 🌟"
    },{
        name:"م. حنان حافظ",
        img: "./imgs/hn-ha.jpg",
        size: Math.floor(Math.random() * (70)) + 100,        
        msg: "جمعتِ بين الحكمة والرقة، والعلم والتواضع. كان حضورك طيفًا جميلاً في رحلتنا. نثق أن مستقبلك مشرق كما أنتِ 🌼"
    },{
        name:"ا. امام سيد",
        img: "./imgs/rash.jpg",
        size: Math.floor(Math.random() * (70)) + 100,        
        msg: " علمك وهدوؤك واحترامك كان لهم الأثر الكبير في نفوسنا. لا شك أنك قدوة لمن حولك. كل الأمنيات لك بمزيد من العطاء والتألق ✨"
    }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalMsg = document.getElementById("modalMsg");
const closeBtn = document.getElementById("closeBtn");


trainees.forEach((person, index) => {
    const img = document.createElement("img");
    img.src = person.img;
    img.alt = person.name;
     img.style.width = person.size + 'px';
    img.style.height = person.size + 'px';

    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = person.img;
        modalName.textContent = person.name;
        modalMsg.textContent = person.msg;
    });
    gallery.appendChild(img);
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});