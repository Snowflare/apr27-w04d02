$(() => {
  // const h1 = document.getElementsByTagName('h1')[0];

  // h1.addEventListener('click', (event) => {
  //   console.log(event);
  //   alert(`${event.x}, ${event.y}`);
  // });
  
  // const $h1 = jQuery('h1');
  // $h1.on('click', (event) => {
  //   console.log(event);
  // });

  // grab the button from the DOM
  const $button = jQuery('#add-item');

  // listen for the button to get clicked
  $button.on('click', () => {
    // grab the input field from the DOM
    const $input = $('#new-item');

    // get the value from the input field
    const value = $input.val();

    // create a new DOM node with value
    const $newLi = $('<li>').text(value);

    // grab an existing DOM element
    const $list = $('#main-list');

    // append or prepend new node to the DOM
    // $list.append($newLi);
    $list.prepend($newLi);

    // clear the input field
    $input.val('');

    // set focus on the input field
    $input.focus();
  });
});
