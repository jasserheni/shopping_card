// plus button
let plusBtn = (document.getElementsByClassName('plus-btn'));
for (let plus of plusBtn) {
    
  plus.addEventListener('click', function () {
    

    plus.nextElementSibling.innerText++;
    totalPrice();
    
  });
}
// minus button
let minusBtn = document.getElementsByClassName('minus-btn');
for (let minus of minusBtn) {
  minus.addEventListener('click', function () {
    if (minus.previousElementSibling.innerText > 0) {
      minus.previousElementSibling.innerText--;
    }    
    totalPrice();
});
  }

  
function totalPrice() {
    
    let productPrice = document.getElementsByClassName('prix');
   
    let productQuantity = document.getElementsByClassName('quantityy');
    
    let sum = 0;
    for (let i = 0; i < productPrice.length; i++) {
      sum += productPrice[i].innerText * productQuantity[i].innerText;
      console.log(sum)
    }
    document.getElementById('prix-total').innerText = sum;
  }

  
let deleteBtn = document.querySelectorAll('.delete-btn');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove();

   
    totalPrice();
  });
}
let likeBtn = document.querySelectorAll('.like-btn');

let heartIcon = document.querySelectorAll('.car');
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener('click', function () {
      console.log(heartIcon[i].style.fill)
    if (heartIcon[i].style.color === 'black') {
      heartIcon[i].style.color = 'red';
    } else {
      heartIcon[i].style.color = 'black';
    }
  });
}