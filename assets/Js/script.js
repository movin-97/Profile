// contant change functuon
var about = document.getElementById('about');
var skills = document.getElementById('skills');
var contact = document.getElementById('contact');

// about button function
function About(){
  about.style.display = 'block';
  contact.style.display = 'none';
  skills.style.display = 'none';
}

// skills button function
function Skills(){
  contact.style.display = 'none';
  about.style.display = 'none';
  skills.style.display = 'block';
}

// contact button function
function Contact(){
  contact.style.display = 'block';
  about.style.display = 'none';
  skills.style.display = 'none';
}

// Skills view function using jquray
$(".skill-per").each(function() {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({ animatedValue: 0 }).animate(
      { animatedValue: per },
      {
        duration: 1000,
        step: function() {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
        complete: function() {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        }
      }
    );
  });
  