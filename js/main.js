
function replaceName() {
    let name = prompt("siapakah nama anda?","rizky  "); 
    document.getElementById("name").innerHTML = name ;

}

replaceName()


const images = [
    "assets/image/gambar2.jpg",
    "assets/image/gambar3.jpg",
    "assets/image/gambar4.jpg",
    "assets/image/gambar5.jpg"
];

let currentIndex = 0;
const currentImage = document.getElementById("currentImage");


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[currentIndex];
}


function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    currentImage.src = images[currentIndex];
}


function autoSlide() {
    nextImage();
}


setInterval(autoSlide, 3000);


    
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    const result = document.getElementById('result');
    const currentTime = document.getElementById('currentTime');

   
    function updateTime() {
        const now = new Date();
        currentTime.textContent = now.toString();
    }
    updateTime();

  
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const tanggal = document.getElementById('tanggal').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const pesan = document.getElementById('pesan').value;

        document.getElementById('resNama').textContent = nama;
        document.getElementById('resTanggal').textContent = tanggal;
        document.getElementById('resGender').textContent = gender;
        document.getElementById('resPesan').textContent = pesan;

        form.reset(); 
    });
});
   


    
    
    