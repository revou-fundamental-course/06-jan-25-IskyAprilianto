// Pilih elemen menu dan navbar
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

// Toggle class active saat menu diklik
menu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("active");
});

// Tutup menu saat klik di luar elemen menu atau navbar
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// Ambil elemen greeting
const userGreeting = document.getElementById("user-greeting");

// Cek apakah nama sudah disimpan di Local Storage
let userName = localStorage.getItem("userName");

// Jika nama belum ada, minta pengguna memasukkan nama
if (!userName) {
  userName = prompt("Please enter your name:");
  if (userName) {
    localStorage.setItem("userName", userName);
  } else {
    userName = "Guest";
  }
}

// Tampilkan nama di website
userGreeting.textContent = userName;

// fungsi massage us
// Tangkap elemen form
const messageForm = document.getElementById("messageForm");

// Tangkap elemen output
const outputContainer = document.querySelector(".output-container");
const outputName = document.getElementById("outputName");
const outputBirthdate = document.getElementById("outputBirthdate");
const outputGender = document.getElementById("outputGender");
const outputMessage = document.getElementById("outputMessage");
const currentTimeElement = document.getElementById("currentTime");

// Tambahkan event listener untuk menangani submit
messageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai input dari form
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("message").value;

  // Validasi input: Pastikan semua field terisi
  if (!name || !birthdate || !gender || !message) {
    alert("Tolong diisi ya kakak!");
    return;
  }

  // Ambil waktu saat ini
  const currentTime = new Date().toLocaleString();

  // Tampilkan data di elemen output
  currentTimeElement.textContent = currentTime;
  outputName.textContent = name;
  outputBirthdate.textContent = birthdate;
  outputGender.textContent = gender;
  outputMessage.textContent = message;

  // Pastikan output terlihat setelah submit
  outputContainer.style.display = "block";

  // Reset form setelah submit
  messageForm.reset();
});
