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

        let callingText = document.querySelector(".calling-text");


        // NAV HEADER items

        let nav = document.querySelectorAll(".nav-wrapper");


        let allArray = document.querySelectorAll('.all-text');
        let residentialArray = document.querySelectorAll('.residential-text');
        let coastalArray = document.querySelectorAll('.coastal-text');
        let commercialArray = document.querySelectorAll('.commercial-text');

        // PROJECTS PAGE ALL VARIABLES
        let projectsHeading = document.querySelector('.projects-heading');
        let projectsButton  = document.querySelectorAll('.projects-button');
        let projectsRooms   = document.querySelectorAll('.projects-rooms');

        // All house Headings variables
        let familyHouseHeading = document.querySelectorAll('.family-house-heading');
        let modernGlassHeading = document.querySelectorAll('.modern-glass-heading');
        let countryHouseHeading = document.querySelectorAll('.country-house-heading');
        let rusticalVillaHeading = document.querySelectorAll('.rustical-villa-heading');
        let palaceHouseHeading = document.querySelectorAll('.palace-house-heading');
        let familyApartmentHeading = document.querySelectorAll('.family-apartment-heading');

        // FOOTER Variables
        let copyrightText = document.querySelector('.copyright-text');
        let footerEmail = document.querySelector(".footer-email");


        // Burger
        let Burger = document.querySelectorAll(".menu-trigger");

        Burger.forEach(i => {
            if (language == "arabic"){
                i.classList.add("menu-trigger-arabic");
            } else if (language == "english"){
                i.classList.remove("menu-trigger-arabic");
            } 
        });


        // ALL PROJECTS COUNTRIES NAME 
        let usaText = document.querySelectorAll('.usa');
        let canadaText = document.querySelectorAll('.canada');
        let ukText = document.querySelectorAll('.uk');
        let italyText = document.querySelectorAll('.italy');
        let portugalText = document.querySelectorAll('.portugal');
        let germanyText = document.querySelectorAll('.germany');

        let area = document.querySelectorAll('.project-area');
        let meter = document.querySelectorAll('.meter');
        let sup = document.querySelectorAll('.sup');

        area.forEach(i => {
            if (language == "arabic"){
                i.classList.add("arabic-style");
            } else if (language == "english"){
                i.classList.remove("arabic-style");
            } 
        });
        meter.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='متر';
            } else if (language == "english"){
                i.innerHTML = "m";
            } 
        });
        sup.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='2';
            } else if (language == "english"){
                i.innerHTML = "2";
            } 
        });


        usaText.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='أمريكا';
            } else if (language == "english"){
                i.innerHTML = "USA";
            } 
        });
        canadaText.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='كندا';
            } else if (language == "english"){
                i.innerHTML = "Canada";
            } 
        });
        ukText.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='بريطانيا';
            } else if (language == "english"){
                i.innerHTML = "UK";
            } 
        });
        portugalText.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='البرتغال';
            } else if (language == "english"){
                i.innerHTML = "Portugal";
            } 
        });
        germanyText.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='ألمانيا';
            } else if (language == "english"){
                i.innerHTML = "Germany";
            } 
        });
        italyText.forEach(i => {
            if (language == "arabic"){
                i.innerHTML ='إيطاليا';
            } else if (language == "english"){
                i.innerHTML = "Italy";
            } 
        });



        // NAV BAR

        nav.forEach(i => {
            if (language == "arabic"){
                i.classList.add("arabic-style");
            } else if (language == "english"){
                i.classList.remove("arabic-style");
            } 
        });

        allArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "جميع المشاريع";
            } else if (language == "english"){
                i.innerHTML = "All";
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

        // All The PROJECT SECTION 
        projectsButton.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "تواصل معنا";
            } else if (language == "english"){
                i.innerHTML = "Contract Realtor";
            } 
        });
        projectsRooms.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "غرف";
            } else if (language == "english"){
                i.innerHTML = "rooms";
            } 
        });


        // All Houses Heading names
        familyHouseHeading.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "منزل عائلي";
            } else if (language == "english"){
                i.innerHTML = "Beautiful Family House";
            } 
        });

        modernGlassHeading.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "فيلا زجاجية حديثة";
            } else if (language == "english"){
                i.innerHTML = "Modern Glass Villa";
            } 
        });

        countryHouseHeading.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "منزل ريفي";
            } else if (language == "english"){
                i.innerHTML = "Cozy Country House";
            } 
        });

        rusticalVillaHeading.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "فيلا ريفية";
            } else if (language == "english"){
                i.innerHTML = "Large Rustical Villa";
            } 
        });

        palaceHouseHeading.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "قصر ملكي";
            } else if (language == "english"){
                i.innerHTML = "Majestic Palace House";
            } 
        });

        familyApartmentHeading.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "شقة عائلية";
            } else if (language == "english"){
                i.innerHTML = "Modern Family Apartment";
            } 
        });
        

        // LANGUAGE SCRIPT

        let langBox = document.querySelectorAll("main .langauge-box");
        let allArBtns = document.querySelectorAll("main .arabic");
        let allEnBtns = document.querySelectorAll("main .english");
        let ulArabic = document.querySelectorAll("nav.nav-wrapper ul");

        ulArabic.forEach(i => {
            if (language == "arabic"){
                i.classList.add("ul-arabic");
            } else if (language == "english"){
                i.classList.remove("ul-arabic");
            } 
        });

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

        langBox.forEach(i => {
            if (language == "arabic"){
                i.classList.remove('langauge-box-en');
            } else if (language == "english"){
                i.classList.add('langauge-box-en');                
            } 
        });

        
        if (language == 'arabic'){

            // LANGUAGE SCRIPT
            if (window.scrollY > 250){
                document.querySelector("header.sticky .arabic").classList.add('active-lang-blue');
                document.querySelector("header.sticky .english").classList.remove('active-lang-blue');
            } else if (window.scrollY < 250){
                document.querySelector("main .arabic").classList.add('active-lang-white');
            document.querySelector("main .english").classList.remove('active-lang-white');
            }
            // LANGUAGE SCRIPT

            callingText.innerHTML = 'تواصل معنا';

            projectsHeading.innerHTML = 'المشاريع';

            // FOOTER SECTION
            document.querySelector(".footer-wrapper").classList.add("arabic-style");

            document.querySelector('.list-heading').innerHTML = 'خريطة الموقع';
            
            document.querySelector('.home-text').innerHTML      = 'الرئيسية';
            document.querySelector('.aboutus-text').innerHTML   = 'عن الشركة';
            document.querySelector('.projects-text').innerHTML  = 'المشاريع';
            document.querySelector('.contactus-text').innerHTML = 'تواصل معنا';

            document.querySelector('.footer-follow').innerHTML = 'تابعنا';
            document.querySelector('.footer-contact').innerHTML = 'تواصل معنا';
            document.querySelector('.location-text').innerHTML = 'المنصورة، المشاية السفلية أمام نادي جزيرة الورد، بوابة رقم 1';
            document.querySelector('.footer-news').innerHTML = 'آخر الأخبار';
            document.querySelector('.footer-subscribe').innerHTML = 'اشترك الآن';

            footerEmail.placeholder = 'البريد الإلكتروني';
            copyrightText.innerHTML = 'جميع الحقوق محفوظة لدى شركة إم جي ©️ 2021 ';


        } else if (language == 'english'){

            // LANGUAGE SCRIPT
            if (window.scrollY > 250){
                document.querySelector(".sticky .arabic").classList.remove('active-lang-blue');
                document.querySelector(".sticky .english").classList.add('active-lang-blue');
                console.log("en");
            } else if (window.scrollY < 250){
                document.querySelector("main .arabic").classList.remove('active-lang-white');
                document.querySelector("main .english").classList.add('active-lang-white');
                console.log("ar")
            }
            // LANGUAGE SCRIPT

            callingText.innerHTML = 'Call Us';

            projectsHeading.innerHTML = 'Projects';

            // FOOTER SECTION
            document.querySelector(".footer-wrapper").classList.remove("arabic-style");

            document.querySelector('.list-heading').innerHTML = 'Site Map';      
            
            document.querySelector('.home-text').innerHTML      = 'Home';
            document.querySelector('.aboutus-text').innerHTML   = 'About Us';
            document.querySelector('.projects-text').innerHTML  = 'Projects';
            document.querySelector('.contactus-text').innerHTML = 'Contact Us';
            
            document.querySelector('.footer-follow').innerHTML = 'Follow Us';        
            document.querySelector('.footer-contact').innerHTML = 'Contact Us';        
            document.querySelector('.location-text').innerHTML ='Mansoura, Al Mashaya Elsoflia Front of Gzeret Al Ward Club, Gate 1';
            document.querySelector('.footer-news').innerHTML ='newsletter';
            document.querySelector('.footer-subscribe').innerHTML ='Subscribe';

            copyrightText.innerHTML = 'All rights reserved to MG Real Estate Egypt ©️ 2021';
            footerEmail.placeholder = 'email';


        }

        localStorage.setItem("language", language);
    }

}

onload = new Translate();