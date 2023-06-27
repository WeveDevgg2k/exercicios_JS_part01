function toggleAccordion(event) {
  const header = event.target
  const content = header.nextElementSibling

  if (content.style.display === "none" || content.style.display === "") {
    closeAllAccordionContent()
    content.style.display = "block"
  } else {
    content.style.display = "none"
  }
}

function closeAllAccordionContent() {
  const contents = document.querySelectorAll(".accordion-content")
  contents.forEach((content) => content.style.display = "none")
}

const headers = document.querySelectorAll('.accordion-header')

headers.forEach((header) => header.addEventListener('click', toggleAccordion))