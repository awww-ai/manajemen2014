document.addEventListener("DOMContentLoaded", function() {
    // Tentukan halaman saat ini dari nama file
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0]; // Contoh: "index.html" -> "index"

    const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
    
    if (sidebarPlaceholder) {
        // Ambil konten dari sidebar.html
        fetch("sidebar.html")
            .then(response => response.text())
            .then(data => {
                // Masukkan konten ke placeholder
                sidebarPlaceholder.innerHTML = data;

                // Tandai menu yang aktif
                const activeLink = document.querySelector(`nav a[data-page='${page}']`);
                if (activeLink) {
                    activeLink.classList.add("bg-gray-200", "text-gray-700", "font-semibold");
                    activeLink.classList.remove("text-gray-600");
                }

                // Tambahkan fungsi ke tombol logout
                const logoutButton = document.getElementById("logout-button");
                if (logoutButton) {
                    logoutButton.addEventListener('click', () => {
                        localStorage.removeItem('userData');
                        window.location.href = 'login.html';
                    });
                }
            });
    }
});
