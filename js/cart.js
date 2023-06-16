$(document).ready(function () {
  var selectedItems = [];
  var totalPrice = + 4000;

  $('input[type="checkbox"]').change(function () {
    var itemName = $(this).next('.name').text();
    var itemPrice = parseInt(itemName.match(/\₦(\d+)/)[1]);

    if ($(this).is(':checked')) {
      selectedItems.push(itemName);
      totalPrice += itemPrice;
    } else {
      var index = selectedItems.indexOf(itemName);
      if (index !== -1) {
        selectedItems.splice(index, 1);
        totalPrice -= itemPrice;
      }
    }
  });

  

  $('#proceedBtn').click(function () {
    $('#selectedItems').empty();
    if (selectedItems.length === 0) {
      alert('Please select at least one item.');
      return;
    }

    selectedItems.forEach(function (item) {
      $('#selectedItems').append(`<li>  ${item}  </li>`);
    });

    $('#totalPrice').text(`Total Price: ₦  ${totalPrice}`);

    $('.mainTotal').text(totalPrice);

    $('#summaryModal').css('display', 'block');
  });

  $('.close, #cancelBtn').click(function () {
    $('#summaryModal').css('display', 'none');
  });

  $('#confirmBtn').click(function () {
    alert('Order confirmed!');
    // Add code to proceed with the checkout process
  });
});
