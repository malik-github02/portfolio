let sections = document.querySelectorAll('.tabs li');
let projectSection = document.querySelector('.project');
let skillSection = document.querySelector('.skills');
let moon = document.querySelector('.mode .moon');
let sun = document.querySelector('.mode .sun');

sections.forEach((ele) => {
       ele.addEventListener('click', () => {
              sections.forEach((e) => {
                     e.classList.remove('active');
              });
              ele.classList.add('active');
              projectSection.style.display = 'none';
              skillSection.style.display = 'none';
              document.querySelector(ele.dataset.section).style.display =
                     'block';
       });
});

moon.onclick = function () {
       document.body.classList.add('dark');
       moon.style.display = 'none';
       sun.style.display = 'block';
       sun.style.color = '#fff';
};
sun.onclick = function () {
       document.body.classList.remove('dark');
       sun.style.display = 'none';
       moon.style.display = 'block';
};
