
$(function(){
    let windowHight=$("header").innerHeight()
    let navHeight=$(".navbar").innerHeight()
     $(".slider").height(windowHight - navHeight)
   
     $("body").css({marginTop:navHeight})

})

$(".navbar a").click(function(){
    $(".navbar a").removeClass("active")   
    $(this).addClass("active")

    let data= $(this).data("food")

    $("html,body").animate({
        scrollTop:$(`#${data}`).offset().top - $(".navbar").innerHeight()
    },700)
})

let block = document.querySelectorAll(".block")
document.onscroll = function(){

    block.forEach((i)=>{

     if(window.scrollY + 2 > i.offsetTop - $(".navbar").innerHeight() ){
        let blockId = i.id
      let navlink=  document.querySelector(`a[data-food=${blockId}]` )

      $(".navbar a").removeClass("active")  
      navlink.classList.add("active")
        
     }
       
    })
}

// $(window).scroll(function(){
//     $(".block").each(function(){


//  if($(window).scrollTop > $(this).offset().top){
//     let id = $(this).attr('id')
//     $(".navbar a").removeClass("active")
//     console.log($(`a[data-food=${id}]`))
   

//  }


    
//     })
// })
// ..........................................

let arrImgSlider=[
    './imgfood/pexels-ella-olsson-1640777.jpg',
    './imgfood/pexels-julie-aagaard-2097090.jpg',
    './imgfood/pexels-daria-shevtsova-704569.jpg'
]
//  slider pagination in header
let pagnitionSlider = document.querySelectorAll('.pagnition-slider li')

pagnitionSlider.forEach((i)=>{
    i.addEventListener("click",function(e){
        pagnitionSlider.forEach(i=> i.classList.remove("active"))
        e.target.classList.add("active")
 document.getElementById('img-slider').src = arrImgSlider[e.currentTarget.dataset.index]
    })
})

//  random slider in header 
setInterval(function(){
    let random ;
  
        random = Math.floor(Math.random() * arrImgSlider.length)
        pagnitionSlider.forEach((i)=>{
         i.classList.remove("active")
         if(i.getAttribute('data-index') == random){
             i.classList.add("active")
         }
        })

        
    document.getElementById('img-slider').src = arrImgSlider[random]
},5000)  

        
let arrMeals =  [
    {id:1,title:"title",info:"Lorem ipsum dolor sit amet.",data:"breakfast"},
    {id:2,title:"title",info:"Lorem ipsum dolor sit amet.",data:"lunch"},
    {id:3,title:"title",info:"Lorem ipsum dolor sit amet.",data:"lunch"},
    {id:4,title:"title",info:"Lorem ipsum dolor sit amet.",data:"dinner"},
    {id:5,title:"title",info:"Lorem ipsum dolor sit amet.",data:"dinner"},
    {id:6,title:"title",info:"Lorem ipsum dolor sit amet.",data:"dinner"},
]
let mealsUl = document.querySelectorAll(".meals-ul li")
 


mealsUl.forEach((i)=>{
    i.addEventListener("click",function(e){
        mealsUl.forEach(i=> i.classList.remove("active"))
        e.currentTarget.classList.add("active")
     if (e.currentTarget.dataset.id =='all'){
        UiMeals(arrMeals)
     }else{
        Ui(e.currentTarget.dataset.id)
     }
       
    })
})

function UiMeals(arr){
    let item = arr.map((i)=>{
        const {id, title , info , data} = i
        return `
        <div class="col-10 col-sm-6 col-lg-4 mb-3">
        <div class="food-meals p-1 border border-warning">
          <div class="row">
             <div class="col-4">
                <img src="./imgfood/pexels-julie-aagaard-2097090.jpg" class="w-100 h-50">
             </div>
             <div class="col-8">
              <h4 class="p-1 mb-2">${title}</h4>
              <p class="mb-2 p-1">${info}</p>
              <a class="btn btn-info mb-3" onclick=Ui(${id})>more</a>
             </div>
          </div>
        </div>
      </div>
     
        `
    })
    
    document.getElementById("mealas-content").innerHTML = item
}
UiMeals(arrMeals)


function Ui(data){

    
    let item = arrMeals.filter((i)=>{
        return  i.data == data
    })

    UiMeals(item)
}
       

// static 
let st = document.querySelectorAll(".st");
let start = false;
window.onscroll= function(){

    if(window.scrollY  >= document.getElementById("statistics").offsetTop - 90){
        if(!start){
            st.forEach((i)=> Static(i))
        }
       start = true
        
    }

    if(window.scrollY >=  document.querySelector(".tips").offsetTop - 150){
 
        $(".tips-p").each(function(){
            Tips($(this), $(".img-tips"))
            
        })
    }

    if(window.scrollY >=  900){
 
        $(".scroll-top").fadeIn()
    }else{
        $(".scroll-top").fadeOut()
    }
};


function Static(el){
let data = el.dataset.satic

let counter = setInterval(()=>{
    el.textContent++;

    if(el.textContent == data){
        clearInterval(counter)
    }

},2000/data)

}

$(function(){
    $(".scroll-top").click(function(){
        $("html,body").animate({
            scrollTop:0
        },900)
    })
})


function Tips(el1, el2){
el1.fadeIn(7000)
el2.slideDown(6000)
}


$(function(){
    let maxhight = 0

    $(".sameHeight div ").each(function(){
      if($(this).height() > maxhight ){
          maxhight = $(this).height()
      }
    })

    $(".sameHeight div ").innerHeight(maxhight)
})

