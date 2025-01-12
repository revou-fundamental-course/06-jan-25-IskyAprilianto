// Pilih elemen menu dan navbar
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

// Toggle class active saat menu diklik
menu.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah perilaku default link
  nav.classList.toggle("active"); // Tambah/hapus class active
});

// Tutup menu saat klik di luar elemen menu atau navbar
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active"); // Hapus class active jika klik di luar
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
    localStorage.setItem("userName", userName); // Simpan nama di Local Storage
  } else {
    userName = "Guest"; // Jika pengguna tidak memasukkan nama
  }
}

// Tampilkan nama di website
userGreeting.textContent = userName;
