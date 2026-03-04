const btnTheme = document.getElementById('btn-theme');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    btnTheme.innerText = "Mode Terang";
}

btnTheme.addEventListener('click', function(){
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        btnTheme.innerText = "Mode Terang";
    } else {
        localStorage.removeItem('theme');
        btnTheme.innerText = "Mode Gelap";
    }
});    

let dataWishlist = [];

function aktifkanTombolBeliWishlist(){
    const tombolBeli = document.querySelectorAll('.btn-detail-beli');
    tombolBeli.forEach(function(button){
        button.addEventListener('click', function(e){
            const cardBody = e.target.closest('.card-body');
            const stokElement = cardBody.querySelector('.stok-text');
            let stok = parseInt(stokElement.innerText.replace('Stok: ', ''));
            if(stok > 0) {
                stok--;
                stokElement.innerText = 'Stok: ' + stok;
                const namaBarang = cardBody.querySelector('.card-title').innerText;
                alert('Berhasil membeli ' + namaBarang + '!');
                if(stok === 0) {
                    e.target.disabled = true;
                    e.target.innerText = "Habis";
                }
            } else {
                alert('Stok Habis!');
            } 
        });
    });
    const tombolWishlist = document.querySelectorAll('.btn-wishlist');
    tombolWishlist.forEach(function(button) {
        button.addEventListener('click', function(e){
            const card = e.target.closest('.card');        
            const namaBarang = card.querySelector('.card-title').innerText;
            const hargaBarang = card.querySelector('.card-text').innerText;
            const gambarBarang = card.querySelector('.card-img-top').src;
            const indexBarangDitemukan = dataWishlist.findIndex(item => item.nama === namaBarang);
            if (indexBarangDitemukan !== -1) {
                dataWishlist[indexBarangDitemukan].jumlah++;
            } else {
                dataWishlist.push({
                    gambar: gambarBarang,
                    nama: namaBarang,
                    harga: hargaBarang,
                    jumlah: 1
                });
            }
            rubahWishlist();
            alert(namaBarang + ' ditambahkan ke Wishlist!');
        });
    });
}

function rubahWishlist() {
    const daftarWishlist = document.getElementById('daftar-wishlist');
    const wishlistCount = document.getElementById('wishlist-count');
    daftarWishlist.innerHTML = '';
    let totalBarang = 0;
    dataWishlist.forEach(item => {
        totalBarang += item.jumlah;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${item.gambar}" alt="${item.nama}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px; margin-right: 15px;">
                <div>
                    <h6 class="mb-0 fw-bold">${item.nama}</h6>
                    <small class="text-muted">${item.harga}</small>
                </div>
            </div>
            <span class="badge bg-primary rounded-pill">Jumlah: ${item.jumlah}</span>
        `;
        daftarWishlist.appendChild(listItem);
    });
    wishlistCount.innerText = totalBarang;
}

function tampilkanWishlist() {
    const modalElement = document.getElementById('wishlistModal');
    const modalWishlist = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalWishlist.show();
}

function hapusWishlist() {
    if (dataWishlist.length === 0) {
        alert("Wishlist sudah kosong!");
        return;
    }
    dataWishlist = [];
    rubahWishlist();
    const modalElement = document.getElementById('wishlistModal');
    const modalWishlist = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalWishlist.hide();
    alert('Wishlist berhasil dikosongkan!');
}

aktifkanTombolBeliWishlist();

