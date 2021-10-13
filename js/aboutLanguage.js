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
            aboutUsHeading.innerHTML = 'عن MG';
            aboutUsHeading.classList.add('arabic-style');

            overviewText.innerHTML = 'نظرة عامة';

            // ABOUT MG SECTION
            aboutMgText.innerHTML = 'نظرة عن MG';
            aboutMgText.classList.add('arabic-style');
            aboutMgContent.innerHTML = 
                                                                    `بدأ كل شيء كحلم وخطة على الورق. أصبحت إم جي العقارية شركة تسويق رائدة منذ عام 2018. منذ بداية الشركة كانت مع بداية الطفرة العمرانية الجديدة التي شهدها سوق العقارات في مصر مع إنشاء مدن الجيل الرابع الجديدة التي تحتوي على العديد من الفرص الاستثمارية الواعدة ، وسرعان ما حولت الشركة نفسها إلى علامة تجارية كاملة معروفة بتفردها ومساعدة عملائها على اتخاذ القرار المناسب للاستثمار والإسكان في ظل وجود العديد من الفرص في السوق العقاري ، بالاعتماد على مجموعة من الطاقات الشابة المتخصصة في كل مجال ، حيث يستفيد عميل شركتنا من الاستشارات الهندسية والاقتصادية والقانونية ، من خلال فريقنا المتخصص وباستخدام أحدث طرق التحليل المبتكرة لمقارنة العرض`;
            aboutMgContent.classList.add('arabic-style');

            // VISION SECTION
            visionText.innerHTML = 'رؤيتنا';
            visionText.classList.add('arabic-style');
            visionContent.innerHTML = 
                                                                    `إم جي العقارية مصر عازمة على إعادة تعريف مفهوم الاستشارات العقارية في المنطقة. من خلال توفير حلول عقارية مبتكرة تستجيب لديناميكيات السوق اليوم ، ومن خلال الاستمرار في التركيز على ما يحتاجه عملاؤنا حقًا ، نجحنا في تغيير المفاهيم المشتركة وفي سد الفجوة بين الخدمات العقارية المقدمة بشكل شائع وتحقيق أفضل استخدام ممكن للاستثمارات. "إم جي العقارية مصر تبدأ حقبة جديدة من خدمات الاستشارات العقارية التي تخلق معايير جديدة وتفتح آفاقًا جديدة"`;
            visionContent.classList.add('arabic-style');

            // MISSION SECTION
            missionText.innerHTML = 'مهمتنا';
            missionText.classList.add('arabic-style');
            missionContent.innerHTML = 
                                                                    `هو تقديم أداء فائق وتحقيق أهداف التسويق وأهداف المبيعات للمطور مقابل جميع احتياجات العملاء. تدرك شركتنا مستوى أهمية قطاع العقارات في الاقتصاد المصري وتأثيره على مجتمعنا علاوة على ذلك ، فإن التزامنا هو تلبية متطلبات عملائنا المباشرين. رضا العملاء هو على رأس أولوياتنا.`;
            missionContent.classList.add('arabic-style');

            // VALUES SECTION
            valuesText.innerHTML = 'قيمنا';
            valuesText.classList.add('arabic-style');
            valuesContent.innerHTML = 
                                                                    `تكمن قوة شركتنا في التجربة من البداية إلى النهاية حيث نسعى دائمًا لتقديم تجربة فريدة لعملائنا المختلفين وتكوين علاقة مميزة مبنية على مصداقية وثقة شركائنا الناجحين`;
            valuesContent.classList.add('arabic-style');

            // OUR TEAM SECTION
            ourTeamText.innerHTML = 'فريقنا';
            ourTeamText.classList.add('arabic-style');
            ourTeamContent.innerHTML = 
                                                                    `نحن نؤمن بطاقات الشباب التي تجعل المستحيل يحدث. لدينا فريق من الكوادر الشابة على درجة عالية من التعليم ومتنوع في تجاربهم الخاصة. يتم اختيارهم بناءً على مواهبهم ومعرفتهم بسوق العقارات في مصر حتى نتمكن من تقديم تجربة لإنجاز مهمتنا.`;
            ourTeamContent.classList.add('arabic-style');

            
            // FOOTER SECTION
            document.querySelector(".footer-wrapper").classList.add("arabic-style");

            document.querySelector('.list-heading').innerHTML = 'خريطة الموقع';
            document.querySelector('.footer-follow').innerHTML = 'تابعنا';
            document.querySelector('.footer-contact').innerHTML = 'تواصل معنا';
            document.querySelector('.location-text').innerHTML = 'المنصورة، المشاية السفلية أمام نادي جزيرة الورد، بوابة رقم 1';
            document.querySelector('.footer-news').innerHTML = 'آخر الأخبار';
            document.querySelector('.footer-subscribe').innerHTML = 'اشترك الآن';


        } 
        
        else if (language == 'english'){
            aboutUsHeading.innerHTML = 'About Us';
            aboutUsHeading.classList.remove('arabic-style');

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

        }

        localStorage.setItem("language", language);

    }

}


onload = new Translate();