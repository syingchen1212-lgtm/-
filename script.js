// 簡單的JavaScript示例
document.addEventListener('DOMContentLoaded', function() {
    console.log('自我介紹網站已載入');

    // 添加一個簡單的互動
    const header = document.querySelector('h1');
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const contactSection = document.getElementById('contact');
    const interestsSection = document.getElementById('interests');
    const educationSection = document.getElementById('education');

    header.addEventListener('click', function() {
        // 回到首頁：只顯示關於我部分
        aboutSection.style.display = 'block';
        contactSection.style.display = 'none';
        skillsSection.style.display = 'none';
        interestsSection.style.display = 'none';
        educationSection.style.display = 'none';
    });

    // 技能鏈接點擊事件
    const skillsLink = document.getElementById('skills-link');
    skillsLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';
        skillsSection.style.display = 'block';
        interestsSection.style.display = 'none';
        educationSection.style.display = 'none';
    });

    // 聯絡方式鏈接點擊事件
    const contactLink = document.getElementById('contact-link');
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'none';
        skillsSection.style.display = 'none';
        contactSection.style.display = 'block';
        interestsSection.style.display = 'none';
        educationSection.style.display = 'none';
    });

    // 興趣鏈接點擊事件
    const interestsLink = document.getElementById('interests-link');
    interestsLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'none';
        skillsSection.style.display = 'none';
        contactSection.style.display = 'none';
        interestsSection.style.display = 'block';
        educationSection.style.display = 'none';
    });

    // 學經歷鏈接點擊事件
    const educationLink = document.getElementById('education-link');
    educationLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'none';
        skillsSection.style.display = 'none';
        contactSection.style.display = 'none';
        interestsSection.style.display = 'none';
        educationSection.style.display = 'block';
    });
});