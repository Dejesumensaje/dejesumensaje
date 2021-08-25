function scrollToPortfolio() {
    return $("html, body").animate({ scrollTop: $("#my-work").offset().top }, 1e3), !1;
}