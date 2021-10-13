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

        let homeArray = document.querySelectorAll('.home-text');
        let aboutusArray = document.querySelectorAll('.aboutus-text');
        let projectsArray = document.querySelectorAll('.projects-text');
        let contactusArray = document.querySelectorAll('.contactus-text');
        

        let residentialArray = document.querySelectorAll('.residential');
        let coastalArray = document.querySelectorAll('.coastal');
        let commercialArray = document.querySelectorAll('.commercial');


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


        if (language == "arabic"){

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
            

        }

        else if (language == "english"){

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
            
            
        }

        localStorage.setItem("language", language);

    }
  }
  
  onload = new Translate();


console.log(document.querySelectorAll('.home-text'));
console.log(document.querySelector('.menu').innerHTML.includes("Home"));