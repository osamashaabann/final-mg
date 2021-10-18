class Translate{
    constructor(){
        document.querySelector(".arabic").addEventListener("click", () =>{
            this.translate("arabic");
        });
  
        document.querySelector(".english").addEventListener("click", () =>{
            this.translate("english");
        });
  
        this.translate(localStorage.getItem("language"));

    }
  
    translate(language){

        let callingText = document.querySelector(".calling-text");


        // NAV HEADER items

        let nav = document.querySelectorAll(".nav-wrapper");


        let homeArray       =  document.querySelectorAll('.home-text');
        let aboutusArray    =  document.querySelectorAll('.aboutus-text');
        let projectsArray   =  document.querySelectorAll('.projects-text');
        let contactusArray  =  document.querySelectorAll('.contactus-text');

        // The DROPDOWN Menu Items
        let dropdownMenu = document.querySelectorAll(".dropdown");
        let allDropdown = document.querySelectorAll('.all-dropdown');
        let residentialDropdown = document.querySelectorAll('.residential-dropdown');
        let coastalDropdown = document.querySelectorAll('.coastal-dropdown');
        let commercialDropdown = document.querySelectorAll('.commercial-dropdown');
        // The DROPDOWN Menu Items


        // All Contact us page variables
        let contactHeading  =  document.querySelector('.contact-heading');


        let copyrightText = document.querySelector('.copyright-text');
        let footerEmail = document.querySelector(".footer-email");

        // CONTACT FORM ALL VARIABLES
        let contactFormName = document.querySelector('.contact-form-name');
        let contactFormEmail = document.querySelector('.contact-form-email');
        let contactFormPhone = document.querySelector('.contact-form-phone');
        let contactFormMessage = document.querySelector('.contact-form-message');

        
        // NAV BAR

        nav.forEach(i => {
            if (language == "arabic"){
                i.classList.add("arabic-style");
            } else if (language == "english"){
                i.classList.remove("arabic-style");
            } 
        });

        homeArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "الرئيسية";
            } else if (language == "english"){
                i.innerHTML = "Home";
            } 
        });
        aboutusArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "عن الشركة";
            } else if (language == "english"){
                i.innerHTML = "About Us";
            } 
        });
        projectsArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "المشاريع";
            } else if (language == "english"){
                i.innerHTML = "Projects";
            } 
        });
        contactusArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "تواصل معنا";
            } else if (language == "english"){
                i.innerHTML = "Contact Us";
            } 
        });


        // THE NAV ITEMS
        dropdownMenu.forEach(i => {
            if (language == "arabic"){
                i.classList.add('dropdown-arabic');
            } else if (language == "english"){
                i.classList.remove('dropdown-arabic');
            } 
        });
        allDropdown.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "جيمع المشاريع";
            } else if (language == "english"){
                i.innerHTML = "All";
            } 
        });
        residentialDropdown.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "سكني";
            } else if (language == "english"){
                i.innerHTML = "Residential";
            } 
        });
        commercialDropdown.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "تجاري";
            } else if (language == "english"){
                i.innerHTML = "Commercial";
            }  
        });
        coastalDropdown.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "ساحلي";
            } else if (language == "english"){
                i.innerHTML = "Coastal";
            } 
        });


        


        if (language == 'arabic'){
            callingText.innerHTML = 'تواصل معنا';


            contactHeading.innerHTML = 'تواصل معنا';

            document.querySelector(".contact-form").classList.add("arabic-style");
            document.querySelector(".footer-wrapper").classList.add("arabic-style");

            document.querySelector('.contcat-form-title').firstElementChild.innerHTML = 'تواصل معنا';
            document.querySelector('.contact-button').innerHTML = 'إرسال';


            // FOOTER SECTION
            document.querySelector(".footer-wrapper").classList.add("arabic-style");

            document.querySelector('.list-heading').innerHTML = 'خريطة الموقع';
            document.querySelector('.footer-follow').innerHTML = 'تابعنا';
            document.querySelector('.footer-contact').innerHTML = 'تواصل معنا';
            document.querySelector('.location-text').innerHTML = 'المنصورة، المشاية السفلية أمام نادي جزيرة الورد، بوابة رقم 1';
            document.querySelector('.footer-news').innerHTML = 'آخر الأخبار';
            document.querySelector('.footer-subscribe').innerHTML = 'اشترك الآن';

            footerEmail.placeholder = 'البريد الإلكتروني';
            copyrightText.innerHTML = 'جميع الحقوق محفوظة لدى شركة إم جي ©️ 2021 ';

            contactFormName.placeholder = 'الإسم الأول و الأخير';
            contactFormEmail.placeholder = 'البريد الإلكتروني';
            contactFormPhone.placeholder = 'رقم الهاتف';
            contactFormMessage.placeholder = 'رسالة';


        } else if (language == 'english'){

            callingText.innerHTML = 'Call Us';

            contactHeading.innerHTML ='Contact Us';

            document.querySelector(".contact-form").classList.remove("arabic-style");
            document.querySelector(".footer-wrapper").classList.remove("arabic-style");

            document.querySelector('.contcat-form-title').firstElementChild.innerHTML = 'Contact Us';
            document.querySelector('.contact-button').innerHTML = 'Submit';


            // FOOTER SECTION
            document.querySelector(".footer-wrapper").classList.remove("arabic-style");

            document.querySelector('.list-heading').innerHTML = 'Site Map';        
            document.querySelector('.footer-follow').innerHTML = 'Follow Us';        
            document.querySelector('.footer-contact').innerHTML = 'Contact Us';        
            document.querySelector('.location-text').innerHTML ='Mansoura, Al Mashaya Elsoflia Front of Gzeret Al Ward Club, Gate 1';
            document.querySelector('.footer-news').innerHTML ='newsletter';
            document.querySelector('.footer-subscribe').innerHTML ='Subscribe';

            copyrightText.innerHTML = 'All rights reserved to MG Real Estate Egypt ©️ 2021';
            footerEmail.placeholder = 'email';

            contactFormName.placeholder = 'First and Last Name';
            contactFormEmail.placeholder = 'e.g. your_email@example.com';
            contactFormPhone.placeholder = 'Phone';
            contactFormMessage.placeholder = 'Message';

        }

        localStorage.setItem("language", language);

    }

}

onload = new Translate();