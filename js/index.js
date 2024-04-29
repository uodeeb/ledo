function changeContentOnClick() {
  const servicesElements = document.getElementsByClassName("sec02")[0].children;
  const servDes = [
    "مبيدات آمنة للأسرة: نستخدم مبيدات حشرية عالية الجودة، بدون رائحة، وآمنة تمامًا لك ولعائلتك.",
    "خدمة ضمان ومتابعة: نقدم خدمة ضمان شاملة ومتابعة دورية لضمان بقاء منزلك خاليًا من الحشرات.",
    "زيارات ميدانية متخصصة: فريقنا من المهندسين المتخصصين في مكافحة الحشرات جاهز لإجراء زيارات ميدانية لتقييم وحل مشكلتك بكفاءة.",
    "مع ليدو هتبيدو - نحن نضمن لك بيئة منزلية نظيفة وخالية من الحشرات. اتصل بنا اليوم وودع الحشرات إلى الأبد!",
  ];

  for (let i = 0; i < servicesElements.length; i++) {
    let isChanged = false; // Flag to track element state

    servicesElements[i].addEventListener("click", () => {
      if (!isChanged) {
        servicesElements[i].children[0].textContent = servDes[i];
        isChanged = true; // Mark element as changed
      } else {
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
        servicesElements[i].children[0].textContent = servDes[i];
        isChanged = true; // Mark element as changed
      } else {
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
  window.location.href = "tel:+966560692118";
});
