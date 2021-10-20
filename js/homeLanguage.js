class Translate{
    constructor(){

        let ar = document.querySelectorAll(".arabic");
        let en = document.querySelectorAll(".english");

        ar.forEach(i => {
            i.addEventListener('click', ()=>{
                this.translate("arabic");
            })
        });

        en.forEach(i => {
            i.addEventListener('click', ()=>{
                this.translate("english");
            })
        });    
      

        this.translate(localStorage.getItem("language"));

    

}
  
    translate(language){

        // Burger
        let Burger = document.querySelectorAll(".menu-trigger");

        Burger.forEach(i => {
            if (language == "arabic"){
                i.classList.add("menu-trigger-arabic");
            } else if (language == "english"){
                i.classList.remove("menu-trigger-arabic");
            } 
        });

        let ulArabic = document.querySelectorAll("nav.nav-wrapper ul");

        ulArabic.forEach(i => {
            if (language == "arabic"){
                i.classList.add("ul-arabic");
            } else if (language == "english"){
                i.classList.remove("ul-arabic");
            } 
        });

        


        let callingText = document.querySelector(".calling-text");

        let nav = document.querySelectorAll(".nav-wrapper");

        let homeArray = document.querySelectorAll('.home-text');
        let aboutusArray = document.querySelectorAll('.aboutus-text');
        let projectsArray = document.querySelectorAll('.projects-text');
        let contactusArray = document.querySelectorAll('.contactus-text');

        // The DROPDOWN Menu Items
        let dropdownMenu = document.querySelectorAll(".dropdown");
        let allDropdown = document.querySelectorAll('.all-dropdown');
        let residentialDropdown = document.querySelectorAll('.residential-dropdown');
        let coastalDropdown = document.querySelectorAll('.coastal-dropdown');
        let commercialDropdown = document.querySelectorAll('.commercial-dropdown');
        // The DROPDOWN Menu Items

        let residentialArray = document.querySelectorAll('.residential');
        let coastalArray = document.querySelectorAll('.coastal');
        let commercialArray = document.querySelectorAll('.commercial');

        let social = document.querySelector(".social");

        // FOOTER VARIABLES  
        let copyrightText = document.querySelector('.copyright-text');
        let footerEmail = document.querySelector(".footer-email");

    
        // The Carousel Caption 
        let carouselCaption = document.querySelectorAll(".carousel .carousel-caption");

        // CONTACT FORM ALL VARIABLES
        let contactFormName = document.querySelector('.contact-form-name');
        let contactFormEmail = document.querySelector('.contact-form-email');
        let contactFormPhone = document.querySelector('.contact-form-phone');
        let contactFormMessage = document.querySelector('.contact-form-message');



        carouselCaption.forEach(i => {
            if (language == "arabic"){
                i.classList.add("arabic-carousel-direction");
            } else if (language == "english"){
                i.classList.remove("arabic-carousel-direction");
            } 
        });

        nav.forEach(i => {
            if (language == "arabic"){
                i.classList.add("arabic-style");
            } else if (language == "english"){
                i.classList.remove("arabic-style");
            } 
        });

        // The Social Line and Tha Icons 
        if (language == 'arabic'){
                social.classList.add("social-test");
                
            } else if (language == "english"){
                        social.classList.remove("social-test");

            }
        // The Social Line and Tha Icons 

    

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



        residentialArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "سكني";
            } else if (language == "english"){
                i.innerHTML = "Residential";
            } 
        });
        coastalArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "ساحلي";
            } else if (language == "english"){
                i.innerHTML = "Coastal";
            } 
        });
        commercialArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "تجاري";
            } else if (language == "english"){
                i.innerHTML = "Commercial";
            } 
        });

        let allArBtns = document.querySelectorAll("main .arabic");
        let allEnBtns = document.querySelectorAll("main .english");

        allArBtns.forEach(i => {
            if (language == "arabic"){
                i.classList.add('active-lang-white');
            } else if (language == "english"){
                i.classList.remove('active-lang-white');
                
            } 
        });

        allEnBtns.forEach(i => {
            if (language == "arabic"){
                i.classList.remove('active-lang-white');
            } else if (language == "english"){
                i.classList.add('active-lang-white');
                
            } 
        });


        if (language == "arabic"){
            document.querySelector(".sticky .arabic").classList.add('active-lang-blue');

            document.querySelector(".sticky .english").classList.remove('active-lang-blue');


            callingText.innerHTML = 'تواصل معنا';
            


            document.querySelector(".contact-form").classList.add("arabic-style");
            document.querySelector(".footer-wrapper").classList.add("arabic-style");



            document.querySelector('.first-carousel-text-1').innerHTML = 'وجهتك';
            document.querySelector('.first-carousel-text-2').innerHTML = 'إلى رفاهية';
            document.querySelector('.first-carousel-text-3').innerHTML = 'الحياة';

            document.querySelector('.second-carousel-text-1').innerHTML = 'MG للعقارات';
            document.querySelector('.second-carousel-text-2').innerHTML = 'هي وجهتك';
            document.querySelector('.second-carousel-text-3').innerHTML = 'للمصداقية';



            document.querySelector('.contcat-form-title').firstElementChild.innerHTML = 'تواصل معنا';
            document.querySelector('.contact-button').innerHTML = 'إرسال';

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
            

        }

        else if (language == "english"){

            document.querySelector(".sticky .arabic").classList.remove('active-lang-blue');
            document.querySelector("main .arabic").classList.remove('active-lang-white');

            document.querySelector(".sticky .english").classList.add('active-lang-blue');
            document.querySelector("main .english").classList.add('active-lang-white');

            callingText.innerHTML = 'Call Us';


            document.querySelector(".contact-form").classList.remove("arabic-style");
            document.querySelector(".footer-wrapper").classList.remove("arabic-style");


            document.querySelector('.first-carousel-text-1').innerHTML = 'Your Destination';
            document.querySelector('.first-carousel-text-2').innerHTML = 'For Luxury';
            document.querySelector('.first-carousel-text-3').innerHTML = 'Life';

            document.querySelector('.second-carousel-text-1').innerHTML = 'MG Real estate';
            document.querySelector('.second-carousel-text-2').innerHTML = 'Is Your Destination';
            document.querySelector('.second-carousel-text-3').innerHTML = 'For Credibility';


            document.querySelector('.contcat-form-title').firstElementChild.innerHTML = 'Contact Us';
            document.querySelector('.contact-button').innerHTML = 'Submit';

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