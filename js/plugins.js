// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.


const container = document.querySelectorAll('.container-1');
const limit = 10;

container.forEach(function(c){
  const bm = c.querySelector('.minus');
  const bp = c.querySelector('.plus');
  const d = c.querySelector('.display');
  let count = 0;
  bm.addEventListener('click',function(){
    if(count>0){
      count--;
      displayAndCheck();
    }
  })
  bp.addEventListener('click',function(){
    if(count<limit){
      count++;
      displayAndCheck();
    }
  })
  function displayAndCheck(){
    d.textContent = count;
    bm.disabled = count==0 ? true : false;
    bp.disabled = count<limit ? false : true;
  }
})


if( document.body.classList.contains('page-sign-in') ){

  const f = document.querySelector('form');

  f.addEventListener('submit',function(e){
    e.preventDefault();
    location.href = 'select-your-movie.html';
  })
}


if( document.body.classList.contains('page-sign-in-print-tickets') ){

  const f = document.querySelector('form');

  f.addEventListener('submit',function(e){
    e.preventDefault();
    location.href = 'order-summary-print-tickets.html';
  })
}









if( document.body.classList.contains('page-printing-0') ){

  setTimeout(function(){
    //things to do
    location.href = 'printing-1.html';
  }, 3000)

}


if( document.body.classList.contains('page-printing-1') ){

  setTimeout(function(){
    //things to do
    location.href = 'printing-2.html';
  }, 3000)

}


if( document.body.classList.contains('page-printing-2') ){

  setTimeout(function(){
    //things to do
    location.href = 'printing-3.html';
  }, 3000)

}


if( document.body.classList.contains('page-printing-3') ){

  setTimeout(function(){
    //things to do
    location.href = 'enjoy-your-movie.html';
  }, 3000)

}





// if(document.body.classList.contains('select-a-time')){
//   function resizeImage(){
//     const body = document.body;
//     const header = document.querySelector('header');
//     const footer = document.querySelector('.footer');
//     const imageContainer = document.querySelector('.right');
//     const h = body.clientHeight - (header.clientHeight + footer.clientHeight);
//     imageContainer.style.height = h+'px';
//   }
//   window.addEventListener('resize', resizeImage);
//   resizeImage();
// }





















const form = document.querySelector('form');
const list = form.querySelectorAll('[name=options]');
const submit = document.querySelector('[type="submit"]');
const reset = document.querySelector('[type="reset"]');

list.forEach(enableButton);
function enableButton(l){
  l.addEventListener('click',function(){
    submit.disabled = false;
    reset.disabled = false;
  })
}

reset.addEventListener('click',function(e){
  form.reset();
  submit.disabled = true;
  reset.disabled = true;
})

form.addEventListener('submit',function(e){
  e.preventDefault();
  location.href = 'https://www.codepen.io';
})
