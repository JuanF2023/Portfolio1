document.addEventListener("DOMContentLoaded", function() {
    const headerTextLarge = "Juan Flores Developer Portfolio";
    const headerTextSmall = "Developer Portfolio";
    const headerElementLarge = document.getElementById("headerTextLarge");
    const headerElementSmall = document.getElementById("headerTextSmall");
    headerElementLarge.innerHTML = ""; // Clear initial text
    headerElementSmall.innerHTML = ""; // Clear initial text
    let charIndexLarge = 0;
    let charIndexSmall = 0;

    function typeText(element, text, charIndex) {
        if (charIndex < text.length) {
            let span = document.createElement("span");
            span.textContent = text[charIndex] === ' ' ? '\u00A0' : text[charIndex];
            span.style.setProperty('--order', charIndex);
            element.appendChild(span);
            setTimeout(() => typeText(element, text, charIndex + 1), 50);
        }
    }

    if (window.innerWidth >= 992) { // Check if screen width is large
        typeText(headerElementLarge, headerTextLarge, charIndexLarge);
    } else {
        typeText(headerElementSmall, headerTextSmall, charIndexSmall);
    }
});

function toggleText() {
    var moreText = document.getElementById("moreText");
    var readMoreBtn = document.getElementById("readMoreBtn");
    var readLessBtn = document.getElementById("readLessBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreBtn.style.display = "none";
    } else {
        moreText.style.display = "none";
        readMoreBtn.style.display = "block";
    }
}

document.getElementById("readMoreBtn").addEventListener("click", toggleText);
document.getElementById("readLessBtn").addEventListener("click", toggleText);

function loadPage(page) {
    document.getElementById('contentFrame').src = page;
    $('.navbar-nav .nav-link').removeClass('active');
    $(`.navbar-nav .nav-link[onclick="loadPage('${page}')"]`).addClass('active');
    $('.navbar-collapse').collapse('hide'); // Collapse the navbar
}

$(document).ready(function () {
    // Collapse the navbar when a link is clicked
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const readLessBtn = document.getElementById('readLessBtn');
    const moreText = document.getElementById('moreText');

    readMoreBtn.addEventListener('click', function() {
        moreText.style.display = 'block';
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline-block';
    });

    readLessBtn.addEventListener('click', function() {
        moreText.style.display = 'none';
        readMoreBtn.style.display = 'inline-block';
        readLessBtn.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const headerTextLarge = "Juan Flores Developer Portfolio";
    const headerTextSmall = "Developer Portfolio";
    const headerElementLarge = document.getElementById("headerTextLarge");
    const headerElementSmall = document.getElementById("headerTextSmall");
    headerElementLarge.innerHTML = ""; // Clear initial text
    headerElementSmall.innerHTML = ""; // Clear initial text
    let charIndexLarge = 0;
    let charIndexSmall = 0;

    function typeText(element, text, charIndex) {
        if (charIndex < text.length) {
            let span = document.createElement("span");
            span.textContent = text[charIndex] === ' ' ? '\u00A0' : text[charIndex];
            span.style.setProperty('--order', charIndex);
            element.appendChild(span);
            setTimeout(() => typeText(element, text, charIndex + 1), 50);
        }
    }

    if (window.innerWidth >= 992) { // Check if screen width is large
        typeText(headerElementLarge, headerTextLarge, charIndexLarge);
    } else {
        typeText(headerElementSmall, headerTextSmall, charIndexSmall);
    }

    // Dashboard image switch functionality
    const switchButton = document.getElementById("switch-dashboard-btn");
    const dashboardImg = document.getElementById("dashboard-img");

    switchButton.addEventListener("click", function() {
        if (dashboardImg.src.includes("dashboard2.png")) {
            dashboardImg.src = "pictures/dashboard.png";
        } else {
            dashboardImg.src = "pictures/dashboard2.png";
        }
    });

    function toggleText() {
        var moreText = document.getElementById("moreText");
        var readMoreBtn = document.getElementById("readMoreBtn");
        var readLessBtn = document.getElementById("readLessBtn");

        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            readMoreBtn.style.display = "none";
        } else {
            moreText.style.display = "none";
            readMoreBtn.style.display = "block";
        }
    }

    document.getElementById("readMoreBtn").addEventListener("click", toggleText);
    document.getElementById("readLessBtn").addEventListener("click", toggleText);

    function loadPage(page) {
        document.getElementById('contentFrame').src = page;
        $('.navbar-nav .nav-link').removeClass('active');
        $(`.navbar-nav .nav-link[onclick="loadPage('${page}')"]`).addClass('active');
        $('.navbar-collapse').collapse('hide'); // Collapse the navbar
    }

    $(document).ready(function () {
        // Collapse the navbar when a link is clicked
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const readMoreBtn = document.getElementById('readMoreBtn');
        const readLessBtn = document.getElementById('readLessBtn');
        const moreText = document.getElementById('moreText');

        readMoreBtn.addEventListener('click', function() {
            moreText.style.display = 'block';
            readMoreBtn.style.display = 'none';
            readLessBtn.style.display = 'inline-block';
        });

        readLessBtn.addEventListener('click', function() {
            moreText.style.display = 'none';
            readMoreBtn.style.display = 'inline-block';
            readLessBtn.style.display = 'none';
        });
    });
});
