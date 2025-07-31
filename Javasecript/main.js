// operator aritmatika
let a = 10;
let b = 5;

console.log("hasil dari penjumlahan: ${a + b}"); // Penjumlahan

hobi = "Bersepeda";   
const alamat = "Jl. Merdeka No. 123, Jakarta";  
const pekerjaan = "Programmer";

if (gnder === "Laki-laki") {
    console.log("Selamat datang,");
}   else if (gnder === "Perempuan") {
    console.log("Selamat datang, Nyonya!");
}   else {
    console.log("Selamat datang!");
}       
console.log("Umur saya adalah " + umur + ".");
console.log("Hobi saya adalah " + hobi + ".");
console.log("Alamat saya adalah " + alamat + ".");
console.log("Pekerjaan saya adalah " + pekerjaan + ".");

// loading the script
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        alert("Halo dunia! Ini adalah demo JavaScript inline");
    });
});
// This code will run when the button is clicked
document.querySelector("button").addEventListener("click", function() {
    alert("Halo dunia! Ini adalah demo JavaScript inline");
});
// This code will run when the button is clicked


// bolean nilai hanya tulisan true atau false
// contoh boolean
let isActive = true;
if (isActive) {
    console.log("Aktif");
}
else {
    console.log("Tidak Aktif");
}   


// oprator temorary
// umur berapa harus memiliki KTP
let umur = 17;
let gnder = "Laki-laki"; // tipe data string
// tipe data number
let tinggiBadan = 170; // dalam cm
let beratBadan = 65; // dalam kg


// tip dta undefined
let data;
console.log(data); // Output: undefined     
// tipe data null
let dataNull = null;
console.log(dataNull); // Output: null

// oprator membaca tipe data
console.log(typeof gnder); // Output: string
console.log(typeof umur); // Output: number
console.log(typeof hobi); // Output: string
console.log(typeof alamat); // Output: string
console.log(typeof pekerjaan); // Output: string    

// tipe data simbol
const sym1 = Symbol("deskripsi simbol");
const sym2 = Symbol("deskripsi simbol");
console.log(sym1 === sym2); // Output: false, karena simbol unik    
// tipe data BigInt
const bigIntValue = BigInt(123456789012345678901234567890); 
console.log(bigIntValue); // Output: 123456789012345678901234567890n

// animaton loading 
// Menambahkan animasi loading saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {  
    const loadingElement = document.createElement("div");
    loadingElement.className = "loading";
    loadingElement.innerText = "Loading...";
    document.body.appendChild(loadingElement);

    // Menghapus animasi loading setelah 2 detik
    setTimeout(function() {
        document.body.removeChild(loadingElement);
    }, 2000);
}); 

// type data primitive
let kelas = {
    'nama': 'Kelas JavaScript',
    'jumlahSiswa': 30,      
    'isActive': true,
    'alamat': null, 
    'jumlahSiswa': BigInt(30),
    'deskripsi': Symbol('Kelas JavaScript'),
    'hobi': ['Bersepeda', 'Membaca', 'Bermain Musik'],
    'guru': {
        'nama': 'bro',
        'umur': 19,
        'hobi': ['Bersepeda', 'Memasak']
    }
};

// Menampilkan informasi kelas
console.log("Nama Kelas: " + kelas.nama);
console.log("Jumlah Siswa: " + kelas.jumlahSiswa);
console.log("Aktif: " + kelas.isActive);
console.log("Alamat: " + kelas.alamat);
console.log("Jumlah Siswa (BigInt): " + kelas.jumlahSiswa);
console.log("Deskripsi: " + kelas.deskripsi.toString());
console.log("Hobi: " + kelas.hobi.join(", "));
console.log("Guru: " + kelas.guru.nama);
console.log("Umur Guru: " + kelas.guru.umur);
console.log("Hobi Guru: " + kelas.guru.hobi.join(", "));    

// saya sedang mengikuti pmerogram web basic 
let programWebBasic = {
    nama: "Program Web Basic",
    jumlahPeserta: 20,
    trainer: "Mr. Asep",
    deskripsi: "Kelas ini dirancang untuk pemula yang ingin belajar dasar-dasar pengembangan web."
};
// Menampilkan informasi program web basic
console.log( "Nama Program: "  )

// array 
let buaah = ["Apel", "Pisang", "Jeruk", "Mangga" , "Semangka" , "Anggur"    , "Kiwi", "Nanas", "Pepaya", "Melon"];
console.log("Daftar Buah:");
buaah.forEach(function(buah) {
    console.log("- " + buah);
});

// menghitung jumlah buah
let jumlahBuah = buaah.length;
console.log("Jumlah Buah: " + jumlahBuah);  


 const fruits = ['Apel', 'Pisang', 'Jeruk', 'Mangga', 'Anggur'];
            const fruitList = document.getElementById('fruitList');

            fruits.forEach(fruit => {
                const li = document.createElement('li');
                li.textContent = fruit;
                fruitList.appendChild(li);
            });

// opratror perbandingan
let x = 10;
let y = 5;
console.log("x lebih besar dari y: " + (x > y)); // true
console.log("x lebih kecil dari y: " + (x < y)); // false
console.log("x sama dengan y: " + (x === y)); // false
console.log("x tidak sama dengan y: " + (x !== y)); // true
console.log("x lebih besar atau sama dengan y: " + (x >= y)); // true
console.log("x lebih kecil atau sama dengan y: " + (x <= y)); // false                  

// motode perubahan data array
// push( irmas) - menambahkan elemen ke akhir array
// pop() - menghapus elemen terakhir dari array
// shift() - menghapus elemen pertama dari array
// unshift() - menambahkan elemen ke awal array
// splice() - menambahkan atau menghapus elemen di posisi tertentu
// slice() - mengambil sebagian elemen dari array
// concat() - menggabungkan dua atau lebih array
// join() - menggabungkan elemen array menjadi string
// indexOf() - mencari indeks dari elemen tertentu
// includes() - memeriksa apakah elemen tertentu ada dalam array


