$(function(){

    /* -------------------- 漢堡選單控制 -------------------- */
    $('#burger').click(function(){
        $(this).toggleClass('active');
        $('.rwd-menu').toggleClass('active');
    });

    $('#burger-in').click(function(){
        $('#burger').toggleClass('active');
        $('.rwd-menu').toggleClass('active');
    });


    /* -------------------- 首頁 intro 區卡片 -------------------- */

    $('.drop-toggle-btn').click(function () {
        const card = $(this).closest('.card');
        const dropTextBox = card.find('.card-text-box');
        
        dropTextBox.toggleClass('active');
    });

    /* -------------------- 蟲圖鑑卡片 -------------------- */

    $('.beetle-card').click(function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $('.beetle-card').removeClass('active');
          $(this).addClass('active');
        }
    });

    /* -------------------- FAQs-list控制 -------------------- */

    $('.faq-toggle-btn').click(function () {
        const faqItem = $(this).closest('.faq-item');
        
        faqItem.toggleClass('active');
    });

});