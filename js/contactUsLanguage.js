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
        let homeArray       =  document.querySelectorAll('.home-text');
        let aboutusArray    =  document.querySelectorAll('.aboutus-text');
        let projectsArray   =  document.querySelectorAll('.projects-text');
        let contactusArray  =  document.querySelectorAll('.contactus-text');


        // All Contact us page variables
        let contactHeading  =  document.querySelector('.contact-heading');

        

        homeArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "الرئيسية";
            } else if (language == "english"){
                i.innerHTML = "Home";
            } 
        });
        aboutusArray.forEach(i => {
            if (language == "arabic"){
                i.innerHTML = "عنا";
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


        


        if (language == 'arabic'){
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


        } else if (language == 'english'){
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
        }

        localStorage.setItem("language", language);

    }

}

onload = new Translate();