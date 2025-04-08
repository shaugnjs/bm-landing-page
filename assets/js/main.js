/**
 * BM Company - Main JavaScript File
 * This file contains all custom JavaScript functionality for the BM website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    setupSmoothScrolling();
    enhanceCards();
    setupCounters();
  });
  
  /**
   * Initialize and enhance navigation functionality
   */
  function initNavigation() {
    // Highlight active navigation item based on current page
    highlightCurrentPage();
    
    // Add scroll event listener to change navbar appearance on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled', 'shadow-sm');
        } else {
          navbar.classList.remove('navbar-scrolled', 'shadow-sm');
        }
      });
    }
    
    // Close mobile menu when clicking a nav item
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navItems && navbarCollapse) {
      navItems.forEach(item => {
        item.addEventListener('click', function() {
          if (navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
          }
        });
      });
    }
  }
  
  /**
   * Highlight the current page in the navigation
   */
  function highlightCurrentPage() {
    // Get current page path
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Find all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Loop through links and add active class to matching page
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || 
          (currentPage === 'index.html' && href === 'index.html') || 
          (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  /**
   * Setup smooth scrolling for anchor links
   */
  function setupSmoothScrolling() {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([data-bs-toggle])');
    
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Calculate offset for fixed header
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
          
          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  /**
   * Add additional interactivity to card elements
   */
  function enhanceCards() {
    // Add hover effects to service cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.classList.add('shadow');
      });
      
      card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow');
      });
    });
  }
  
  /**
   * Setup and initialize number counters for statistics
   */
  function setupCounters() {
    // Animation for statistic counters if present
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
      const options = {
        threshold: 0.5
      };
      
      const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            let count = 0;
            const speed = 2000 / target; // Adjust speed based on target number
            
            const updateCount = () => {
              if (count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, speed);
              } else {
                counter.innerText = target;
              }
            };
            
            updateCount();
            observer.unobserve(counter);
          }
        });
      }, options);
      
      counters.forEach(counter => {
        observer.observe(counter);
      });
    }
  }
  
  /**
   * Show a message when a user tries to submit a form
   * Note: Since forms are not supported, this prevents confusion
   */
  function handleFormSubmit(e) {
    e.preventDefault();
    alert('Form submission is currently not supported. Please contact us via email instead.');
    return false;
  }
  
  /**
   * Handle back-to-top button functionality
   */
  window.addEventListener('scroll', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });