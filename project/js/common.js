/* Search Functionality */

/* function openSearch() {
    document.getElementById('search').style.display = 'flex';
    document.getElementById('search').slideToggle();
}
function closeNav() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById("menu").style.width = "0%";
    document.getElementById('navicon').style.display = 'inline';
    document.getElementById('xicon').style.display = 'none';    
} */

$(document).ready(function(){
    $('#searchicon').click(function(){
        $('#search').slideToggle(
            function(){
                $('#searchicon').html('&#10005;');
            }, function(){
                $('#searchicon').html('&#128269;');
            }
        );
    })
});

/* Mobile Menu */
$(document).ready(function(){
    $('#navicon').click(function(){
        $('#menu').slideToggle(
            function(){
                $('#navicon').html('&#10005;');
            }, function(){
                $('#navicon').html('&#9776;');
            }
        );
    })
});

/* jQuery that works but does not toggle. */
/* $(document).ready(function(){
    $('#navicon').click(function(){
        $('#menu').show('fast', function(){
            $('#navicon').html('&#10005;');
        });
    })
}); */

/* Easy jQuery way to toggle mobile menu. Does not toggle icon. */
/* $(document).ready(function(){
    $('#navicon').click(function(){
        $('#menu').toggle(1000);
    })
}); */

/* Another jQuery attempt at toggle menu with toggling icons. Keep for reference. */ 
/* $(document).ready(function(){
    $('#navicon').click(function(){
        $('#menu').toggle(
            function(){
                $('#menu').show(0, function(){
                    $('#navicon').html('&#10005;');
                });
            }, function(){
                $('#menu').show(0, function(){
                    $('#navicon').html('&#9776;');
                });
            }
        );
    })
}); */

/* Earlier successful JavaScript attempt at open/close nav functions to be used with the following HTML:
<div id="navicon" onclick="openNav()">&#9776;</div>
<div id="xicon" onclick="closeNav()">&#10005;</div> */
/* function openNav() {
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('menu').style.width = '100%';
    document.getElementById('navicon').style.display = 'none';
    document.getElementById('xicon').style.display = 'inline';
}
function closeNav() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById("menu").style.width = "0%";
    document.getElementById('navicon').style.display = 'inline';
    document.getElementById('xicon').style.display = 'none';    
} */

/* Earliest successful HTML JavaScript attempt at mobile menu:
<a href="#menu" class="navicon" onclick="document.getElementById('menu').style.display = 'flex';"></a> */
