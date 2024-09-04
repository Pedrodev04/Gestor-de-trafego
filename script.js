let btnmenu= document.getElementById('btn-menu')
let menu= document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

const overlayy = document.getElementById('overlay');
const showOverlayBtn = document.getElementById('show-overlay-btn');
const closeOverlayBtn = document.getElementById('close-overlay-btn');


// Impede que o clique dentro do conteúdo do overlay feche o overlay
document.querySelector('.flex-meus').addEventListener('click', (e) => {
    e.stopPropagation();
});

  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.efeito-inicio');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });


  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.topo-do-site');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.titulo');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.avancado');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.p-avancado');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
 
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.medio');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
 
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.p-medio');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.basico');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.p-basico');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.h2-sobre');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.p-sobre');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.btn-social');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.img-sobre');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.titulo-servicos');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.flex-meus');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.titulo-form');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.nome');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.email');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.celular');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.mensagem');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.btn-enviar');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.logo-footer');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.btn-footer');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });
 