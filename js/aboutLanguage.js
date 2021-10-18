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
        
        // About-us page texts variables 
        let aboutUsHeading  =  document.querySelector(".aboutus-title");
        let overviewText    =  document.querySelector(".overview-text");

        let aboutMgText     =  document.querySelector(".about-mg-text");
        let aboutMgContent  =  document.querySelector(".about-mg-content");

        let visionText      =  document.querySelector(".vision-text");
        let visionContent   =  document.querySelector(".vision-content");

        let missionText     =  document.querySelector(".mission-text");
        let missionContent  =  document.querySelector(".mission-content");

        let valuesText      =  document.querySelector(".values-text");
        let valuesContent   =  document.querySelector(".values-content");

        let ourTeamText     =  document.querySelector(".our-team-text");
        let ourTeamContent  =  document.querySelector(".our-team-content");

        let copyrightText = document.querySelector('.copyright-text');
        let footerEmail = document.querySelector(".footer-email");


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


            aboutUsHeading.innerHTML = 'عن الشركة';

            overviewText.innerHTML = 'نظرة عامة';

            // ABOUT MG SECTION
            aboutMgText.innerHTML = 'عن الشركة';
            aboutMgText.classList.add('arabic-style');
            aboutMgContent.innerHTML = 
                                                            `بدأ كل شيء كحلم وخطة على الورق. أصبحت  إم جي للتسويق العقاري شركة رائدة في مجال التسويق منذ عام 2018.
                                                            حيث ان بداية الشركة كانت مع بداية الطفرة العمرانية الجديدة التي يشهدها السوق العقارية في مصر بإنشاء مدن الجيل الرابع الجديدة التي تحتوي على العديد من الفرص الاستثمارية الواعدة ، وسرعان ما حولت الشركة نفسها إلى علامة تجارية كاملة معروفة بتفردها و مساعدتها لعملاءها على اتخاذ القرار المناسب للاستثمار والسكن في ظل وجود العديد من الفرص بالسوق العقارية وذلك بالإعتماد على مجموعة من الطاقات الشابه المتخصصة  كلٍ في مجاله ، حيث يستفيد عميل شركتنا من الإستشارة العقارية و الهندسية و الاقتصادية والقانونية ، من خلال فريقنا المتخصص وبإستخدام إحدث اساليب التحليل المبتكرة للمقارنة بين المعروض.`;
            aboutMgContent.classList.add('arabic-style');

            // VISION SECTION
            visionText.innerHTML = 'رؤيتُنا';
            visionText.classList.add('arabic-style');
            visionContent.innerHTML = 
                                                                    `تهدف ام جي الى إعادة صياغة مفهوم الاستشارات العقارية في مصر. من خلال تقديم حلول عقارية مبتكرة وعملية تستجيب لمتغيرات السوق اليوم ، وذلك من خلال الاستمرار في التركيز على ما يحتاجه عملاؤنا حقًا و سد الفجوة بين الخدمات العقارية المقدمة وتحقيق أفضل استخدام ممكن من الاستثمارات.
                                                                    باختصار ، " ام جي تبدأ حقبة جديدة من خدمات الاستشارات العقارية الشاملة التي تخلق معايير جديدة وتفتح آفاقًا جديدة ".`;
            visionContent.classList.add('arabic-style');

            // MISSION SECTION
            missionText.innerHTML = 'مهمتنا';
            missionText.classList.add('arabic-style');
            missionContent.innerHTML = 
                                                                    `تقديم أداء فائق وتحقيق أهداف التسويق وأهداف المبيعات للمطور مقابل جميع احتياجات العملاء. تدرك شركتنا مستوى أهمية قطاع العقارات في الاقتصاد المصري وتأثيره على مجتمعنا. علاوة على ذلك ، علينا أن نُلبي متطلبات عملائنا المباشرين. ليس فقط التزامنا بتوفير أفضل العقارات وتقديم خدمات عالية الجودة ، بل إن إرضاء العملاء هو أولويتنا القصوى.`;
            missionContent.classList.add('arabic-style');

            // VALUES SECTION
            valuesText.innerHTML = 'قيمنا';
            valuesText.classList.add('arabic-style');
            valuesContent.innerHTML = 
                                                                    `تكمن قوة شركتنا في التجربة من البداية الى النهاية حيث اننا نسعى دائمًا الى تقديم تجربة فريدة
                                                                    لعملائنا المختلفين وتكوين علاقة متميزة تُبنى على المصداقية والثقة لشركاء نجاحنا.`;
            valuesContent.classList.add('arabic-style');

            // OUR TEAM SECTION
            ourTeamText.innerHTML = 'فريقنا';
            ourTeamText.classList.add('arabic-style');
            ourTeamContent.innerHTML = 
                                                                    `نحن نؤمن بالطاقات الشبابية التي يمكن أن تصنع المستحيل ، ففريقنا يتكون من مجموعة من الكوادر الشابه على درجة عالية من التعليم والتنوع في تجاربهم ذات الصلة ، حيث  يتم اختيارهم بناءًا على مواهبهم ومعرفتهم بسوق العقارات في مصر حتى نتمكن من تقديم تجربة فريدة لعملائنا`;
            ourTeamContent.classList.add('arabic-style');

            
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


        } 
        
        else if (language == 'english'){

            callingText.innerHTML = 'Call Us';

            aboutUsHeading.innerHTML = 'About Us';

            overviewText.innerHTML = 'Overview';


            // ABOUT MG SECTION
            aboutMgText.innerHTML = 'About MG';
            aboutMgText.classList.remove('arabic-style');
            aboutMgContent.innerHTML = 
                                        `It all started as a dream and a plan on paper. MG Real Estate has become a leading marketing company since 2018. Since the beginning of the company was with the beginning of the new construction boom witnessed by the real estate market in Egypt with the establishment of new fourth-generation cities that contain many promising investment opportunities, and soon the company transformed itself into a full-fledged brand known for its uniqueness and helping its clients to make the appropriate decision for investment and housing In the presence of many opportunities in the real estate market, relying on a group of young energies specialized in each field, where the client of our company benefits from engineering, economic and legal advice, through our specialized team and using the latest innovative methods of analysis to compare the offer`;
            aboutMgContent.classList.remove('arabic-style');

            // VISION SECTION
            visionText.innerHTML = 'Vision';
            visionText.classList.remove('arabic-style');
            visionContent.innerHTML = 
                                                                `MG Real Estate Egypt is determined to redefine real estate consultation concept in the region. By providing innovative real estate solutions responding to today’s market dynamics,and by remaining focused on what our clients really need, we are succeeding in changing common perceptions and in bridging the gap between commonly provided real estate services and yielding the best possible utilization of investments. "MG Real Estate Egypt is starting a new era of real estate consultation services that create new norms and open new horizons"`;
            visionContent.classList.remove('arabic-style');

            // MISSION SECTION
            missionText.innerHTML = 'Vision';
            missionText.classList.remove('arabic-style');
            missionContent.innerHTML = 
                                                                `Is to deliver superior performance and achieve developer’s marketing goals and sales targets versus all clients’ needs. Our company is aware of the level of significance of the real estate sector in the Egyptian economy and its effect on our communi Moreover, our commitment is to deliver the requirements of our immediate clients. customer satisfaction is our top priority.
                                                                `;
            missionContent.classList.remove('arabic-style');

            // VALUES SECTION
            valuesText.innerHTML = 'Values';
            valuesText.classList.remove('arabic-style');
            valuesContent.innerHTML = 
                                                                `The strength of our company lies in the experience from start to finish as we always strive to provide a unique experience To our various clients and to form a distinguished relationship based on the credibility and trust of our successful partners`;
            valuesContent.classList.remove('arabic-style');

            // OUR TEAM SECTION
            ourTeamText.innerHTML = 'Our Team';
            ourTeamText.classList.remove('arabic-style');
            ourTeamContent.innerHTML = 
                                                                `We believe in the energies of the youth that can make the impossible happen. Our team of young cadres is highly educated and diverse in their own experiences. They are selected based on their talents and knowledge of the real estate market in Egypt so that we can provide an experience to get our task done.`;
            ourTeamContent.classList.remove('arabic-style');


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

        }

        localStorage.setItem("language", language);

    }

}


onload = new Translate();