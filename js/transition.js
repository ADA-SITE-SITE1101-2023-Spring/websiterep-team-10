window.addEventListener("load", function() {
    setTimeout(function() {
        var container = document.querySelector(".container");

        if (container) {


            container.classList.add("show");


            var teamMembers = document.querySelectorAll(".team-member");


            for (var i = 0; i < teamMembers.length; i++) {


                var delay = (i + 1) * 200;

                setTimeout(function(member) {
                    member.classList.add("show");
                }, delay, teamMembers[i]);
            }


            var ctaButton = document.querySelector(".cta-button");


            if (ctaButton) {

                var ctaDelay = (teamMembers.length + 1) * 200;

                setTimeout(function(button) {
                    button.classList.add("show");
                }, ctaDelay, ctaButton);
            }
        }
    }, 150);
});