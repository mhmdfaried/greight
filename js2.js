const optionMenu = document.querySelector(".select-menu"),
        selectbtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sbtn_text = optionMenu.querySelector(".sbtn-text");

selectbtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sbtn_text.innerText = selectedOption;
        
        optionMenu.classList.remove("active");
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var options = document.getElementsByClassName('option');
    var quantityInput = document.querySelector('.quantity input');
    var priceInput = document.querySelector('.price input');
    var selectedMenu = '';

    for (var i = 0; i < options.length; i++) {
      options[i].addEventListener('click', function() {
        var selectedOption = this;
        var menuText = selectedOption.querySelector('.option-text').textContent;
        selectedMenu = menuText;
        updatePrice();
      });
    }

    quantityInput.addEventListener('input', function() {
      updatePrice();
    });

    function updatePrice() {
      var quantity = parseInt(quantityInput.value);
      var price = getPrice(selectedMenu);

      if (!isNaN(quantity) && !isNaN(price)) {
        var totalPrice = quantity * price;
        priceInput.value = totalPrice;
      } else {
        priceInput.value = '';
      }
    }

    function getPrice(menuText) {
      var price;

      if (menuText === 'Americano') {
        price = 25000;
      } else if (menuText === 'Cappuccino') {
        price = 35000;
      } else if (menuText === 'Frappuccino') {
        price = 35000;
      } else if (menuText === 'Flat White') {
          price = 35000;
        } else if (menuText === 'Coffee Latte') {
          price = 30000;
      } else if (menuText === 'Heart Coffee') {
          price = 30000;
        } else if (menuText === 'Dalgona Coffee') {
          price = 30000;
      } else if (menuText === 'Mathca Latte') {
          price = 350000;
        } else if (menuText === 'Croissant') {
          price = 15000;
      } else if (menuText === 'Donut') {
          price = 10000;
        } else if (menuText === 'French Fries') {
          price = 15000;
      } else if (menuText === 'Waffle') {
          price = 20000;
      }

      return price;
    }
  });