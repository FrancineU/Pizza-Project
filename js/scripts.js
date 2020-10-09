$(document).ready(function () {
    $(".ordering").hover(function () {
        $("#pizzaOrders").show();
  
    });
    $("#add-order").click(function () {
        $("#new-orders").append('<div class="new-order">' +
            '<div class="form-group">' +
            '<label for="new-size">Size</label>' +
            '<select class="form-control new-size">' +
            '<option>select size</option>' +
            '<option>small</option>' +
            '<option>medium</option>' +
            '<option>large</option>' +
            '</select>' +
  
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-topping">topping</label>' +
            '<select class="form-control new-topping">' +
            '<option>select topping</option>' +
            '<option>bacon</option>' +
            '<option>mushrooms</option>' +
            '<option>onions</option>' +
            '</select>' +
            '</div>' +
  
            '<div class="form-group">' +
            '<label for="new-crust">Crust</label>' +
            '<select class="form-control new-crust">' +
            '<option value="" disabled selected>select crust</option>' +
            '<option>crispy</option>' +
            '<option>stuffed</option>' +
            '<option>gluten-free</option>' +
            '</select>' +
            '</div>' +
  
            '</div>');
    });
    function Pizza(firstName, lastName, deliver) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.deliver=deliver
        this.orders = [];
    }