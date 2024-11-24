const header = document.querySelector("header")


const first_skill = document.querySelector(".skill:first-child")
const sk_counters = document.querySelectorAll(".counter span")
const progress_bars =document.querySelectorAll(".skills svg circle")




const ml_section = document.querySelector(".milestones")
const ml_counters = document.querySelectorAll(".number span")


const prt_section = document.querySelector(".portfolio")
const zoom_icons = document.querySelectorAll(".zoom-icon")
const modak_overlay = document.querySelector(".modak-overlay")


const links = document.querySelectorAll(".nav-link")

const toggle_btn = document.querySelector(".toggle-btn")

const ham = document.querySelector(".ham")



window.addEventListener("scroll" , () => {
  activeLink();
    if (!skillsPlayed) skillsCounter() ;
    mlCounter()
})


function stickyNavbar () {
    header.classList.toggle("scrolled" , window.pageYOffset > 0) ;
 
}


window.addEventListener("scroll" , stickyNavbar)
















      // skills progress animation 


      function hasReached (el) {
        let topPosition = el.getBoundingClientRect().top;
        
        if(window.innerHeight >= topPosition + el.offsetHeight ) return true ; return false
      }



      function updateCount(num , maxNum) {

        let currentNum = +num.innerText ;
       

        if(currentNum < maxNum) {
            num.innerText = currentNum + 1 ;
            setTimeout( () => {
                updateCount(num, maxNum) ;
            } , 12 ) ;
        }
      }


      let skillsPlayed = false 



      function skillsCounter () {
        if(!hasReached(first_skill)) return ;

        skillsPlayed = true

        sk_counters.forEach((counter , i) => {
        let target = +counter.dataset.target ;
          let strokeValue = 427 - 427 * (target / 100);

          progress_bars[i].style.setProperty("--target", strokeValue)

          setTimeout( () => {
            updateCount( counter, target) ;
          } , 400 )


        })
       

        progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards")
      }











      let mlPlayed = false 



      function mlCounter() {
        if(!hasReached(ml_section)) return ;
        mlPlayed = true
        
        ml_counters.forEach(ctr => {
            let target = +ctr.dataset.target; 
           

            setTimeout( () => {
                updateCount(ctr , target ) 
            } ,400 )

        })

      
        
      };












      let mixer = mixitup(".portfolio-gallery" , {
        selectors: {
            target: '.prt-card'
        },
        animation: {
            duration: 680
        } 
      }) ;












     
      function myFunction() {
         var element = document.getElementById("myDIV");
         element.classList.toggle("mystyle");
      }














      function activeLink () {
        let sections = document.querySelectorAll("section[id]")
        let passedSections = Array.from(sections).map((sct , i) => {
          return {y: sct.getBoundingClientRect().top -header.offsetHeight ,
            id: i ,
          };
          
        }).filter(sct => sct.y <= 0) ;

        let currSectionID = passedSections.at(-1).id;
        
        
        links.forEach((l) => l.classList.remove("active"));
        links[currSectionID].classList.add("active");
      }

  activeLink();





     let firstTheme = localStorage.getItem("dark");
    
     changeTheme(+firstTheme);
      function changeTheme (isDark) {
        if (isDark) {
          document.body.classList.add("dark");
          toggle_btn.classList.replace("fa-moon" , "fa-sun") ;
          localStorage.setItem("dark" , 1)
        }
        else {
          document.body.classList.remove("dark");
          toggle_btn.classList.replace("fa-sun" , "fa-moon") ;
          localStorage.setItem("dark" , 0)
        }
      }

      toggle_btn.addEventListener("click" , () => {
        changeTheme(!document.body.classList.contains("dark"))
      })




      ham.addEventListener("click", () => {
        document.body.classList.toggle("open");
        document.body.classList.toggle("stopScrolling") ;
      })



      

      links.forEach((Link) => {
        link.addEventListener("click", () => {
          document.body.classList.toggle("open");
          document.body.classList.toggle("stopScrolling") ;
        })
  
      })