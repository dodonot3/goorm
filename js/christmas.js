particlesJS("particles-js", {
    particles: {
      number: { value: 400, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.7260172626387177,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 4.810221721157459,
        direction: "bottom-left",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 481.02217211574595,
          rotateY: 1523.236878366529
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 383.61638361638364, line_linked: { opacity: 0.5 } },
        bubble: {
          distance: 467.53246753246754,
          size: 3.996003996003996,
          duration: 0.3196803196803197,
          opacity: 1,
          speed: 3
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  // var count_particles, stats, update;
  // stats = new Stats();
  // stats.setMode(0);
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.left = "0px";
  // stats.domElement.style.top = "0px";
  // document.body.appendChild(stats.domElement);
  // count_particles = document.querySelector(".js-count-particles");
  // update = function() {
  //   stats.begin();
  //   stats.end();
  //   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  //   }
  //   requestAnimationFrame(update);
  // };
  // requestAnimationFrame(update);
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form_box");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userName = document.querySelector("#user_name").value;

        alert(`${userName}님, Happy Christmas~❤️`);
    });
});