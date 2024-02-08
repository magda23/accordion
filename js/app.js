let accordionHeaders = document.querySelectorAll(".accordion_header");
let accordionBodys = document.querySelectorAll(".accordion_body");
let chevrons = document.querySelectorAll(".fa-chevron-down");

accordionHeaders.forEach((item, index) => {
  item.addEventListener("click", function () {
    item.classList.add("bold");
    accordionBodys[index].classList.toggle("active");
    chevrons[index].classList.toggle("rotate");
    for (let i = 0; i < accordionBodys.length; i++) {
      if (i !== index) {
        accordionBodys[i].classList.remove("active");
        chevrons[i].classList.remove("rotate");
        accordionHeaders[i].classList.remove("bold");
      }
    }
    if (!accordionBodys[index].classList.contains("active")) {
      item.classList.remove("bold");
    }
  });
});
