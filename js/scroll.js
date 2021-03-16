const scrollContent = document.querySelector('.main');
const mainPoster = document.querySelector('.main-poster');
const contentThird = document.querySelector('.third-img');
const gridTitle = document.querySelector('.grid-title');
const gridAbout = document.querySelector('.grid-about');
const gridHyabalance = document.querySelector('.grid-hyabalance');
const contentFour = document.querySelector('.four-img');
const floatMark = document.querySelector('.float-mark');
const goToFirst = document.querySelector('.goToFirst');
// const scrollbar = document.querySelector('.scrollbar');
// const scrollThumb = document.querySelector('.scrollbar-thumb');

let move = 0;
let scrollMove = 0;
let windowWidth = window.innerWidth;
let scrollContentWidth = scrollContent.scrollWidth;
let maxMoveRight = -8900;
// FIREFOX 沒有 ev.wheelDelta 
function handleWheel(ev) {
  ev.preventDefault();
  scroll(ev.wheelDelta, ev);
}
function handleFFWheel(ev) {
  ev.preventDefault();
  scroll(ev.detail * -9, ev);
}
if (navigator.userAgent.includes('Firefox')) {
  document.addEventListener("DOMMouseScroll", handleFFWheel, false);
} else {
  scrollContent.addEventListener('wheel', handleWheel, false);
}

function scroll(wheelDelta, ev){
  ev.preventDefault();
  move += wheelDelta;
  var m = move / 10000;
  var s = (move / 1000) - 14;
  var h = -(move / 1000) - 0.9;
  var x = -(move / 1000) - 4;
  var f = -(move / 1000) + 32;
  var y = -(move / 1000) - 6.1;
  var r = f -(move / 10);

  if (wheelDelta > 0) {
    if (move > 0) {
      move = 0;
      scrollContent.style.transform = `translate3d(${move}px, 0, 0)`;
      mainPoster.style.transform = `translate3d(0px, 0px, 0px) scale(1.1, 1.1)`;
      contentThird.style.transform = `translate3d(0, 0, 0)`;
      gridTitle.style.opacity = `0`;
      gridAbout.style.opacity = `.8`;
      gridHyabalance.style.opacity = `.9`;
      return;
    }
  }else{
    move =  move - 125;
    scrollContent.style.transform = `translate3d(${move}px, 0, 0)`;
    
    if (move < maxMoveRight) {
      console.log(1)
      scrollContent.style.transform = `translate3d(-8900px, 0, 0)`;
      mainPoster.style.transform = `translate3d(0px, 0px, 0px) scale(${m}, ${m})`;
      contentThird.style.transform = `translate3d(0, 0, 0)`;
      gridTitle.style.opacity = `0`;
      gridAbout.style.opacity = `.8`;
      gridHyabalance.style.opacity = `.9`;
      contentFour.classList.remove("animate__fadeOutDown");
      contentFour.classList.remove("animate__fadeInUp");
      return ;
    }
  }
  if (move < maxMoveRight){
    scrollContent.style.transform = `translate3d(-8900px, 0, 0)`;
    return;
  }
  scrollContent.style.transform = `translate3d(${move}px, 0, 0)`;
  mainPoster.style.transform = `translate3d(0, 0, 0) scale(1.1, 1.1)`;
  contentThird.style.transform = `translate3d(0, 0, 0)`;
  gridTitle.style.opacity = `1`;
  floatMark.style.transform = `translate3d(0, 0, 0)`;

  if(move <= -900){
    floatMark.style.transform = `translate3d(0, 0, 0) rotate(${r}deg)`;
  }

  if(move > -900 && move > -1200){
    mainPoster.style.transform = `translate3d(0px, 0px, 0px) scale(${m}, ${m})`;
  }
  if(move >= -1650){
    gridTitle.style.opacity = `${h}`;
  }
  if(move < -2700 && move > -3750){
    contentThird.style.transform = `translate3d(0px, ${s}%, 0px)`;
  }
  if(move <= -4050){
    gridAbout.style.opacity = `${x}`;
  }
  if(move <= -4900){
    contentFour.classList.remove("animate__fadeInUp");
  }
  if(move <= -5200){
    contentFour.classList.add("animate__fadeInUp");
  }
  if(move <= -5975){
    gridHyabalance.style.opacity = `${y}`;
    contentFour.classList.remove("animate__fadeInUp");
  }
  if(move <= -6175){
    contentFour.classList.remove("animate__fadeInUp");
  }
}

goToFirst.addEventListener('click', function(ev){
  ev.preventDefault();
  scrollContent.style.transform = `translate3d(0, 0, 0)`;

}, false)