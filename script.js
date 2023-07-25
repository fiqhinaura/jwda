const user = {
  email: "fiqhinaura@gmail.com",
  password: 12345678,
};

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("cek");
  // melakukan validasi apakah sandi dan email sudah benar dimasukkannya
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // menggunakan const karena email dan password sudah ditetapkan
  console.log(password);
  console.log(email);
  // menampilkan variabel yang perlu ditampilkan kepada user
  if (user.email == email && user.password == password) {
    window.location.href = "../AKADEMIK/AKADEMIK/index.php";
    // agar ketika sign in akan langsung terhubung ke index.php atau dashboard akademik
    alert("Anda Berhasil Login");
    // menampilkan alert jika berhasil login
  } else {
    alert("email atau sandi salah");
    // menampilkan alert jika gagal login karena salah email atau password
  }
});
