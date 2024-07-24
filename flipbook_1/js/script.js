$(document).ready(function() {
  $('#flipbook').turn({
      width: '100%',
      height: '100%',
      autoCenter: true,
      gradients: true,
      acceleration: true,      
  });

  $(window).resize(function() {
      $('#flipbook').turn('size', $('#flipbook').width(), $('#flipbook').height());
  });

  $('#prevPage').click(function() {
      $('#flipbook').turn('previous');
  });

  $('#nextPage').click(function() {
      $('#flipbook').turn('next');
  });
});
