let cart = [];
let total = 0;

function beliProduk(nama,harga){
    cart.push({
        nama:nama,
        harga:harga
    });

    total += harga;

    document.getElementById("cart-count").innerText = cart.length;

    alert(nama + " berhasil ditambahkan ke keranjang");
}

function checkout(){

    if(cart.length === 0){
        alert("Keranjang masih kosong");
        return;
    }

    let nama = prompt("Masukkan nama penerima:");
    if(!nama) return;

    let alamat = prompt("Masukkan alamat lengkap:");
    if(!alamat) return;

    let pembayaran = prompt(
        "Metode pembayaran:\n" +
        "1. QRIS\n" +
        "2. DANA\n" +
        "3. Transfer Bank\n" +
        "4. COD"
    );

    alert(
        "Pesanan berhasil dibuat!\n\n" +
        "Nama: " + nama +
        "\nAlamat: " + alamat +
        "\nPembayaran: " + pembayaran +
        "\nTotal: Rp " + total.toLocaleString("id-ID")
    );
}
