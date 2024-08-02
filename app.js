
function idHandleFun (idValue){
    const idValueof =  document.getElementById(idValue)
  return idValueof
 }
 function classHandleFun (classValue){
    const classValueof =  document.querySelector(classValue)
  return classValueof
 }
// <!- class selectoe-/>
const search = classHandleFun('.search-box')
const cartPart = classHandleFun('.cart')
const userPart = classHandleFun('.user')
let header = classHandleFun("header")
const navbar = classHandleFun(".navbar")

// <!- Id selectoe-/>
const searchIcon =idHandleFun("search-icon")
const cartIcon =idHandleFun("cart-icon")
const userIcon = idHandleFun('user-icon')
const menuIcon = idHandleFun("menu-icon")



function handleClickEvent(addValue, removeValue ){
    addValue.classList.toggle('active');
    // removeValue.classList.remove('active');
    for (const remove of removeValue){
        remove.classList.remove('active');
    }
}
window.onscroll=()=>{
  search.classList.remove("active")
  cartPart.classList.remove("active")
  userPart.classList.remove("active")
  navbar.classList.remove("active")
}

function scrollHandler(){
  header.classList.toggle("shadow",window.scrollY > 0)
}

searchIcon.addEventListener("click", ()=>handleClickEvent(search ,[cartPart,userPart,navbar]) );
cartIcon.addEventListener("click", ()=>handleClickEvent(cartPart, [search,userPart,navbar]) );
userIcon.addEventListener("click", ()=>handleClickEvent(userPart, [cartPart,search,navbar]) );
window.addEventListener("scroll", scrollHandler);
menuIcon.addEventListener("click", ()=>handleClickEvent(navbar,[cartPart,userPart,search]));

    var swiper = new Swiper(".new-arrival", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      centeredSlides:true,
      breakpoints:{
        0:{
          slidesPerView:0,
        },
        568:{
          slidesPerView:2,
        },
        768:{
          slidesPerView:2,
        },
        1020:{
          slidesPerView:3,
        },
      }
      
    });

