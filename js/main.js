// const container = document.querySelectorAll('.container');
// const limit = 10;

// container.forEach(function(c){
//   const bm = c.querySelector('.minus');
//   const bp = c.querySelector('.plus');
//   const d = c.querySelector('.display');
//   let count = 0;
//   bm.addEventListener('click',function(){
//     if(count>0){
//       count--;
//       displayAndCheck();
//     }
//   })
//   bp.addEventListener('click',function(){
//     if(count<limit){
//       count++;
//       displayAndCheck();
//     }
//   })
//   function displayAndCheck(){
//     d.textContent = count;
//     bm.disabled = count==0 ? true : false;
//     bp.disabled = count<limit ? false : true;
//   }
// })


// if( document.body.classList.contains('page-sign-in') ){

//   const f = document.querySelector('form');

//   f.addEventListener('submit',function(e){
//     e.preventDefault();
//     location.href = 'select-your-movie.html';
//   })
// }






// if( document.body.classList.contains('page-printing-0') ){

//   setTimeout(function(){
//     //things to do
//     location.href = 'printing-1.html';
//   }, 3000)

// }


// if( document.body.classList.contains('page-printing-1') ){

//   setTimeout(function(){
//     //things to do
//     location.href = 'printing-2.html';
//   }, 3000)

// }


// if( document.body.classList.contains('page-printing-2') ){

//   setTimeout(function(){
//     //things to do
//     location.href = 'printing-3.html';
//   }, 3000)

// }


// if( document.body.classList.contains('page-printing-3') ){

//   setTimeout(function(){
//     //things to do
//     location.href = 'enjoy-your-movie.html';
//   }, 3000)

// }





















if( document.body.classList.contains('page-select-your-tickets') ) {

  const cont = document.querySelectorAll('.container');
  const l = 10;
  // display total
  const totalDisplay = document.querySelector('.total h2');
  // reference continue button
  const btnContinue = document.querySelector('.continue');

  // set initial values in local storage
  localStorage.setItem('senior',0);
  localStorage.setItem('child',0);
  localStorage.setItem('adult',0);

  cont.forEach(function(c){
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
      // set total for individual category based on data-price attribute
      // store value in local storage
      localStorage.setItem(c.dataset.name, `${count*c.dataset.price}`);
      // tally up values in local storage to create total for all categories
      totalDisplay.textContent = `$${parseInt(localStorage.getItem('senior'))+parseInt(localStorage.getItem('adult'))+parseInt(localStorage.getItem('child'))}.00`;
    }
  })

  btnContinue.addEventListener('click',function(){
    location.href = 'order-summary.html';
  })

}

if( document.body.classList.contains('page-order-summary')) {

  const ticketInfo = document.querySelectorAll('.ticket-info div');
  const totalDisplay = document.querySelector('.total h5');

  ticketInfo.forEach(function(t){
    const num = t.querySelector('.number');
    const tot = num.querySelector('span');
    tot.textContent = parseInt(localStorage.getItem(num.dataset.name)) / num.dataset.price;
  })

  totalDisplay.textContent = `$${parseInt(localStorage.getItem('senior'))+parseInt(localStorage.getItem('adult'))+parseInt(localStorage.getItem('child'))}.00`;

}


if( document.body.classList.contains('page-sign-in') ){

  const f = document.querySelector('form');

  f.addEventListener('submit',function(e){
    e.preventDefault();
    location.href = 'select-your-movie.html';
  })
}

if( document.body.classList.contains('page-sign-up') ){

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
  }, 2000)

}


if( document.body.classList.contains('page-printing-1') ){

  setTimeout(function(){
    //things to do
    location.href = 'printing-2.html';
  }, 2000)

}


if( document.body.classList.contains('page-printing-2') ){

  setTimeout(function(){
    //things to do
    location.href = 'printing-3.html';
  }, 2000)

}


if( document.body.classList.contains('page-printing-3') ){

  setTimeout(function(){
    //things to do
    location.href = 'enjoy-your-movie.html';
  }, 2000)

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



























