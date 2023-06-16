$(document).ready(function() {
    var selectedItemsOne = [];
    var selectedItemsTwo = [];
    var selectedItemsThree = [];
    var subTotalOne = 0;
    var subTotalTwo = 0;
    var subTotalThree = 0;
    var totalPrice = subTotalOne + subTotalTwo + subTotalThree + 4000;

    // console.log(subTotalOne);

    $('.items input[type="checkbox"]').change(function() {
        var itemNameOne = $(this).next('.pack').text();
        var itemPriceOne = parseInt(itemNameOne.match(/\₦(\d+)/)[1]);

        if ($(this).is(':checked')) {
            selectedItemsOne.push(itemNameOne);
            subTotalOne += itemNameOne;
        } else {
            var index = selectedItemsOne.indexOf(itemNameOne);
            if(index !== -1){
                selectedItemsOne.splice(index, 1);
                subTotalOne -= itemPriceOne
            }
        }

    });

    $('.items-2 input[type="checkbox"]').change(function() {
        var itemNameTwo = $(this).next('.name').text();
        var itemPriceTwo = parseInt(itemNameTwo.match(/\₦(\d+)/)[1]);

        if ($(this).is(':checked')) {
            selectedItemsTwo.push(itemNameTwo);
            subTotalTwo += itemNameTwo;
        } else {
            var index = selectedItemsTwo.indexOf(itemNameTwo);
            if(index !== -1){
                selectedItemsTwo.splice(index, 1);
                subTotalTwo -= itemPriceTwo
            }
        }
    });

    $('.items-3 input[type="checkbox"]').change(function() {
        var itemNameThree = $(this).next('.other').text();
        var itemPriceThree = parseInt(itemNameThree.match(/\₦(\d+)/)[1]);

        if ($(this).is(':checked')) {
            selectedItemsThree.push(itemNameThree);
            subTotalThree += itemNameThree;
        } else {
            var index = selectedItemsThree.indexOf(itemNameThree);
            if(index !== -1){
                selectedItemsThree.splice(index, 1);
                subTotalThree -= itemPriceThree
            }
        }

    });

    $('#proceedBtn').click(function() {
        $('#selectedItems').empty();
        if (selectedItemsOne, selectedItemsTwo , selectedItemsThree === 0) {
                alert('you haven not selected any item.');
                return;
            }

            selectedItemsOne.forEach(function(item) {
                $('#selectedItems').append(`<li>  ${item}  </li>`);
              });
          
              $('#totalPrice').text(`Total Price: ₦  ${totalPrice}`);
          
              $('#summaryModal').css('display', 'block');
            });
          
            $('.close, #cancelBtn').click(function() {
              $('#summaryModal').css('display', 'none');
            });
          
            $('#confirmBtn').click(function() {
              alert('Order confirmed!');
              // Add code to proceed with the checkout process
    });

    
});