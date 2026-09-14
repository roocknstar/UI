const buttonBuat = document.getElementById('button-buat');
const buttonnHapus = document.getElementById('button-hapus');
const isiKartu = document.getElementById('isi-kartu');

buttonBuat.addEventListener('click', function() {
    if (isiKartu.innerHTML === "") {      
        const namaMahasiswa = "Nama: Melvina"; 
        const nimMahasiswa = "NIM: 825250021";

        const kartu = document.createElement('div');
        kartu.classList.add('kartu-id');

        kartu.innerHTML = `
            <h3>${namaMahasiswa}</h3>
            <h3>${nimMahasiswa}</h3>
        `;

        isiKartu.appendChild(kartu);
    } else {
        alert("Kartu ID sudah dibuat.");
    }
});

buttonHapus.addEventListener('click', function() {
    isiKartu.innerHTML = "";
});