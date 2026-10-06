const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value.trim();
  const privacy = document.getElementById("privacy").checked;

  if (!name || !email || !topic || !message || !privacy) {
    alert("Bitte fülle alle Felder aus und bestätige die Datenschutzerklärung.");
    return;
  }

  const recipient = "deine-email@example.de";
  const subject = encodeURIComponent(`Beratungsanfrage: ${topic}`);
  const body = encodeURIComponent(
    `Hallo Michelle,

ich interessiere mich für eine Beratung.

Name: ${name}
E-Mail: ${email}
Thema: ${topic}

Nachricht:
${message}

Viele Grüße
${name}`
  );

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
