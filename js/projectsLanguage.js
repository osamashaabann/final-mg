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


        // NAV HEADER items
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
                i.innerHTML = "تواصل مع المالك";
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
        


        // Other styles for the Projects page
        if (language == 'arabic'){
            projectsHeading.innerHTML = 'المشاريع';

            // FOOTER SECTION
            document.querySelector(".footer-wrapper").classList.add("arabic-style");

            document.querySelector('.list-heading').innerHTML = 'خريطة الموقع';
            
            document.querySelector('.home-text').innerHTML      = 'الرئيسية';
            document.querySelector('.aboutus-text').innerHTML   = 'عنا';
            document.querySelector('.projects-text').innerHTML  = 'المشاريع';
            document.querySelector('.contactus-text').innerHTML = 'تواصل معنا';

            document.querySelector('.footer-follow').innerHTML = 'تابعنا';
            document.querySelector('.footer-contact').innerHTML = 'تواصل معنا';
            document.querySelector('.location-text').innerHTML = 'المنصورة، المشاية السفلية أمام نادي جزيرة الورد، بوابة رقم 1';
            document.querySelector('.footer-news').innerHTML = 'آخر الأخبار';
            document.querySelector('.footer-subscribe').innerHTML = 'اشترك الآن';

        } else if (language == 'english'){
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

        }

        localStorage.setItem("language", language);
    }

}

onload = new Translate();