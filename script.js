window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const faders = document.querySelectorAll('.fade-in');

function handleScrollFade() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('active');
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const email = document.getElementById("email").value.trim();
  const prodi = document.getElementById("prodi").value.trim();

  if (!nama || !email || !prodi || !nim) {
    alert("Semua field wajib diisi.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Email tidak valid.");
    return false;
  }

  alert("Pendaftaran berhasil!");
  return true;
}


