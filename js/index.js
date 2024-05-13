function changeContentOnClick() {
  const servicesElements = document.getElementsByClassName("sec02")[0].children;
  const servDes = [
    "مع تزايد حوادث المشاكل الصحية المتعلقة بالذباب والبعوض، مثل حمى الضنك والملاريا، وجب علينا إستخدام نهج هادف للمكافحة الفعالة لهذه المشكلة",
    "إحمِ منزلك أو منشأتك من جميع تهديدات القوارض والحشرات الزاحفة (الصراصير والنمل العادى والابيض والخنافس).",
    "إن حشرات بق الفراش هي حشرات صغيرة بلا أجنحة تتغذى فقط على دماء الحيوانات ذوات الدم الحار مما يجعل الإنسان مصدرًا مثاليًا للغذاء لها اتصل بليدو وتخلص منها نهائيا.",
    "خدمات تبخير ليدو  هي الحل النهائي للقضاء على جميع الحشرات داخل المحيط مغلق / مفتوح لتتأكد تمامًا من أن منزلك أو منشأتك خالية من الإصابة."
     ];

  for (let i = 0; i < servicesElements.length; i++) {
    let isChanged = false; // Flag to track element state

    servicesElements[i].addEventListener("click", () => {
      if (!isChanged) {
        servicesElements[i].children[0].textContent =""
        servicesElements[i].children[1].textContent = servDes[i];
        isChanged = true; // Mark element as changed
      } else {
        console.log(servicesElements[i].children[1])
        servicesElements[i].children[1].textContent = "";
        servicesElements[i].children[0].textContent =
          servicesElements[i].dataset.originalContent; // Revert to original content
        isChanged = false; // Mark element as back to original state
      }
    });

    // Store initial text content in a data attribute
    servicesElements[i].dataset.originalContent =
      servicesElements[i].textContent;
  }
}

// Call the function to attach event listeners
changeContentOnClick();

function changeContentOnClickClean() {
  const servicesElements = document
    .getElementsByClassName("sec04")[0]
    .getElementsByTagName("article");
  const servDes = [
    "خدمات  التنظيف الأفضل مع متخصصين فى الإهتمام بجميع التفاصيل والمحافظة على منزل نظيف وآمن",
    "سيارات مجهزة لنقل أثاثكم بإحترافية إلى جميع أنحاء المملكة مع الحفاظ عليه بدون خدش واحد",
  ];

  for (let i = 0; i < servicesElements.length; i++) {
    let isChanged = false; // Flag to track element state

    servicesElements[i].addEventListener("click", () => {
      if (!isChanged) {
        servicesElements[i].children[0].textContent =""
        servicesElements[i].children[1].textContent = servDes[i];
        isChanged = true; // Mark element as changed
      } else {
        servicesElements[i].children[1].textContent =""
        servicesElements[i].children[0].textContent =
          servicesElements[i].dataset.originalContent; // Revert to original content
        isChanged = false; // Mark element as back to original state
      }
    });

    // Store initial text content in a data attribute
    servicesElements[i].dataset.originalContent =
      servicesElements[i].textContent;
  }
}

// Call the function to attach event listeners
changeContentOnClickClean();

const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
const navigation = document.querySelector(".navigation");

hamburgerBtn.addEventListener("click", () => {
  navigation.classList.toggle("active"); // Toggle 'active' class
});

hamburgerBtn.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Prevent default click behavior
  navigation.classList.toggle("active"); // Toggle 'active' class
});

const callButton = document.getElementById("callButton");

callButton.addEventListener("click", () => {
  window.location.href = "tel:+966572552393";
});
