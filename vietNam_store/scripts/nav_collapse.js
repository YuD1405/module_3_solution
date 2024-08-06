document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.getElementById("navbarToggler");
    var navbarNav = document.getElementById('navbarNav');

    // Tạo đối tượng bootstrap Collapse để sử dụng sau này
    var bsCollapse = new bootstrap.Collapse(navbarNav, {
        toggle: false
    });

    // Lắng nghe sự kiện click trên toàn bộ tài liệu
    document.addEventListener('click', function (event) {
        if (window.innerWidth < 768) {
            var isClickInsideNavbar = navbarNav.contains(event.target) || navbarToggle.contains(event.target);
            
            // Nếu click ra ngoài navbar và toggle button thì ẩn navbar
            if (!isClickInsideNavbar) {
                bsCollapse.hide();
            }
        }
    });

    // Đảm bảo rằng nếu nhấn vào navbar-toggle thì navbar sẽ được mở hoặc đóng
    navbarToggle.addEventListener('click', function () {
        if (window.innerWidth < 768) {
            bsCollapse.toggle();
        }
    });
});
