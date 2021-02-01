    $(document).ready(function () {
        $('#fullpage').fullpage({
            anchors: ['top', 'inter', 'soon', 'contacts', 'download', 'footer'],
            menu: '#sidebar',
            scrollingSpeed: 1000,
            onLeave: function (index, nextIndex) {
              if (nextIndex == 2) {
                  $('#menu').addClass('fixed');
              } else {
                  $('#menu').removeClass('fixed');
              }
              if (nextIndex == 4 || nextIndex == 5) {
                  $('#menu').addClass('blueMenu');
                  $('#sidebar').addClass('blueAside');
              } else {
                  $('#menu').removeClass('blueMenu');
                  $('#sidebar').removeClass('blueAside');
              }
              if (nextIndex == 6) {
                  $('#menu').addClass('dNone');
              } else {
                  $('#menu').removeClass('dNone');
              }

              return true;
          }  
        });




    });
    document.getElementById("inPhone").onmousemove = function(e) {
        obj = document.getElementById("phone");
        obj.style.top = e.pageY - ($(obj).height()/2) + "px";
        obj.style.left = e.pageX -($(obj).width()/4) - ($(body).width()/2) + "px";
    };