const grid = document.getElementById('grid');

const projects = [
  '01 - Javascript Drum Kit',
  '02 - JS and CSS Clock',
  '03 - CSS Variables',
  '04 - Array Cardio Day 1',
  '05 - Flex Panel Gallery',
  '06 - Type Ahead',
  '07 - Array Cardio Day 2',
  '08 - Fun with HTML5 Canvas',
  '09 - Dev Tools Domination',
  '10 - Hold Shift and Check Checkboxes',
  '11 - Custom Video Player',
  '12 - Key Sequence Detection',
  '13 - Slide in on Scroll',
  '14 - JavaScript References VS Copying',
  '15 - LocalStorage',
  '16 - Mouse Move Shadow',
  '17 - Sort Without Articles',
  '18 - Adding Up Times with Reduce',
  '19 - Webcam Fun',
  '20 - Speech Detection',
  '21 - Geolocation',
  '22 - Follow Along Link Highlighter',
  '23 - Speech Synthesis',
  '24 - Sticky Nav',
  '25 - Event Capture, Propagation, Bubbling and Once',
  '26 - Stripe Follow Along Nav',
  '27 - Click and Drag',
  '28 - Video Speed Controller',
  '29 - Countdown Timer',
  '30 - Whack A Mole'
];

 projects.forEach((project) => {
    const link = document.createElement('a');
    link.href = `${project}/index.html`;
    link.setAttribute('target', '_blank');
    link.textContent = project;
    link.classList.add('day-link');
    grid.appendChild(link);
    })