//FAQ Section
var faqToggles = document.querySelectorAll(".faq-question");

for (var i = 0; i < faqToggles.length; i++) {
  faqToggles[i].addEventListener("click", function () {
    var parent = this.parentNode;
    var answer = parent.querySelector(".faq-answer");
    var isOpen = parent.classList.contains("open");

    // Close all other open answers
    var allAnswers = document.querySelectorAll(".faq-answer");
    for (var j = 0; j < allAnswers.length; j++) {
      if (allAnswers[j] !== answer) {
        allAnswers[j].style.display = "none";
        allAnswers[j].parentNode.classList.remove("open");
      }
    }

    // Toggle this answer
    if (isOpen) {
      answer.style.display = "none";
      parent.classList.remove("open");
    } else {
      answer.style.display = "block";
      parent.classList.add("open");
    }
  });
}
