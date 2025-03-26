// // script.js
// // script.js
// // [Keep your existing Intersection Observer code and add these updates]

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.toggle("show");
        
//         // Add delay between section animations
//         const delay = Array.from(document.querySelectorAll('.obs')).indexOf(entry.target) * 100;
//         entry.target.style.animationDelay = `${delay}ms`;
//       }
//     });
//   }, {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
//   });
  
//   document.querySelectorAll('.obs').forEach(section => {
//     observer.observe(section);
//   });
  
//   // [Rest of your existing JavaScript remains the same]
//     // Back to top button
//     const backToTopButton = document.querySelector('.back-to-top');
    
//     window.addEventListener('scroll', () => {
//       if (window.pageYOffset > 300) {
//         backToTopButton.classList.add('active');
//       } else {
//         backToTopButton.classList.remove('active');
//       }
//     });
  
//     backToTopButton.addEventListener('click', (e) => {
//       e.preventDefault();
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     });
  
//     // Form validation
//     const contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//       contactForm.addEventListener('submit', function(e) {
//         if (!this.checkValidity()) {
//           e.preventDefault();
//           e.stopPropagation();
//         }
//         this.classList.add('was-validated');
//       }, false);
//     }
  
//     // Smooth scrolling for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//           window.scrollTo({
//             top: targetElement.offsetTop - 70,
//             behavior: 'smooth'
//           });
          
//           // Close mobile menu if open
//           const navbarCollapse = document.querySelector('.navbar-collapse');
//           if (navbarCollapse.classList.contains('show')) {
//             const toggler = document.querySelector('.navbar-toggler');
//             toggler.click();
//           }
//         }
//       });
//     });
  
//     // Add active class to current section in navbar
//     const sections = document.querySelectorAll('section');
//     const navItems = document.querySelectorAll('.nav-link');
    
//     window.addEventListener('scroll', () => {
//       let current = '';
      
//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
        
//         if (pageYOffset >= (sectionTop - 150)) {
//           current = section.getAttribute('id');
//         }
//       });
      
//       navItems.forEach(item => {
//         item.classList.remove('active');
//         if (item.getAttribute('href') === `#${current}`) {
//           item.classList.add('active');
//         }
//       });
//     });
//   });
document.addEventListener('DOMContentLoaded', function() {
  // Track which sections have been animated
  const animatedSections = new Set();

  // Intersection Observer configuration
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedSections.has(entry.target)) {
        // Mark section as animated
        animatedSections.add(entry.target);
        
        // Trigger the appropriate animation
        triggerSectionAnimation(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Function to trigger section-specific animations
  function triggerSectionAnimation(section) {
    switch(section.id) {
      case 'home':
        animateHomeSection();
        break;
      case 'about':
        section.style.animation = 'slideInLeft 1s ease forwards';
        break;
      case 'services':
        section.style.animation = 'slideInRight 1s ease forwards';
        break;
      case 'product':
        animateProductCards();
        break;
      case 'contact':
        animateContactSection();
        break;
      case 'footer':
        section.style.animation = 'rotateScale 1s ease forwards';
        break;
    }
    section.style.opacity = '1';
  }

  // Home section animation
  function animateHomeSection() {
    const homeTitle = document.querySelector('#home h1');
    const homeSubtitle = document.querySelector('#home h2');
    const homeTagline = document.querySelector('#home h3');
    const homeButton = document.querySelector('#home .btn');

    if (homeTitle) {
      homeTitle.style.animation = 'fadeInDown 1s ease 0.3s forwards';
      homeTitle.style.opacity = '0';
    }
    if (homeSubtitle) {
      homeSubtitle.style.animation = 'fadeInLeft 1s ease 0.6s forwards';
      homeSubtitle.style.opacity = '0';
    }
    if (homeTagline) {
      homeTagline.style.animation = 'fadeInRight 1s ease 0.9s forwards';
      homeTagline.style.opacity = '0';
    }
    if (homeButton) {
      homeButton.style.animation = 'fadeInUp 1s ease 1.2s forwards';
      homeButton.style.opacity = '0';
    }
  }

  // Product cards animation
  function animateProductCards() {
    const cards = document.querySelectorAll('#product .card');
    cards.forEach((card, index) => {
      card.style.animation = `fadeInUp 0.6s ease ${index * 0.2}s forwards`;
      card.style.opacity = '0';
    });
  }

  // Contact section animation
  function animateContactSection() {
    const contactTitle = document.querySelector('#contact h2');
    const contactForm = document.querySelector('#contact form');
    const contactCard = document.querySelector('#contact .card');

    if (contactTitle) {
      contactTitle.style.animation = 'fadeInDown 0.6s ease 0.2s forwards';
      contactTitle.style.opacity = '0';
    }
    if (contactForm) {
      contactForm.style.animation = 'slideInLeft 0.8s ease 0.4s forwards';
      contactForm.style.opacity = '0';
    }
    if (contactCard) {
      contactCard.style.animation = 'slideInRight 0.8s ease 0.6s forwards';
      contactCard.style.opacity = '0';
    }
  }

  // Observe all sections
  document.querySelectorAll('.obs').forEach(section => {
    observer.observe(section);
    
    // Initialize home section immediately
    if (section.id === 'home') {
      section.style.opacity = '1';
      animatedSections.add(section);
      animateHomeSection();
    } else {
      section.style.opacity = '0';
    }
  });

  // Back to top button functionality
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      backToTopButton.classList.toggle('active', window.scrollY > 300);
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.classList.add('was-validated');
    }, false);
  }

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
          const toggler = document.querySelector('.navbar-toggler');
          toggler.click();
        }
      }
    });
  });
});