// ===== AI-AgriBench Website JavaScript =====

// Dark mode functionality
function initDarkMode() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply the current theme
  body.setAttribute('data-theme', currentTheme);
  updateThemeToggle(currentTheme);
  
  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeToggle(newTheme);
    });
  }
}

// Update theme toggle icon based on current theme
function updateThemeToggle(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  const moonIcon = themeToggle.querySelector('.moon-icon');
  const sunIcon = themeToggle.querySelector('.sun-icon');
  
  if (theme === 'dark') {
    if (moonIcon) moonIcon.style.display = 'none';
    if (sunIcon) sunIcon.style.display = 'block';
  } else {
    if (moonIcon) moonIcon.style.display = 'block';
    if (sunIcon) sunIcon.style.display = 'none';
  }
}

// Table sorting functionality
function initTableSorting() {
  const tables = document.querySelectorAll('table');
  
  tables.forEach(table => {
    const headers = table.querySelectorAll('th[data-sortable]');
    
    headers.forEach(header => {
      header.style.cursor = 'pointer';
      header.style.userSelect = 'none';
      
      // Add sort indicator
      const sortIndicator = document.createElement('span');
      sortIndicator.innerHTML = ' ↕️';
      sortIndicator.style.opacity = '0.5';
      header.appendChild(sortIndicator);
      
      header.addEventListener('click', () => {
        const columnIndex = Array.from(header.parentNode.children).indexOf(header);
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        // Determine sort direction
        const currentSort = header.getAttribute('data-sort');
        const newSort = currentSort === 'asc' ? 'desc' : 'asc';
        
        // Clear other column sorts
        headers.forEach(h => {
          h.removeAttribute('data-sort');
          const indicator = h.querySelector('span');
          if (indicator) indicator.innerHTML = ' ↕️';
        });
        
        // Set current column sort
        header.setAttribute('data-sort', newSort);
        const indicator = header.querySelector('span');
        if (indicator) {
          indicator.innerHTML = newSort === 'asc' ? ' ↑' : ' ↓';
          indicator.style.opacity = '1';
        }
        
        // Sort rows
        rows.sort((a, b) => {
          const aText = a.children[columnIndex].textContent.trim();
          const bText = b.children[columnIndex].textContent.trim();
          
          // Try to parse as numbers
          const aNum = parseFloat(aText);
          const bNum = parseFloat(bText);
          
          if (!isNaN(aNum) && !isNaN(bNum)) {
            return newSort === 'asc' ? aNum - bNum : bNum - aNum;
          }
          
          // Sort as strings
          return newSort === 'asc' 
            ? aText.localeCompare(bText)
            : bText.localeCompare(aText);
        });
        
        // Re-append sorted rows
        rows.forEach(row => tbody.appendChild(row));
      });
    });
  });
}

// Search functionality for tables
function initTableSearch() {
  const searchInput = document.getElementById('table-search');
  if (!searchInput) return;
  
  const table = document.querySelector('table');
  if (!table) return;
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const shouldShow = text.includes(searchTerm);
      row.style.display = shouldShow ? '' : 'none';
    });
  });
}

// Contact form handling
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// FAQ Accordion functionality
function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      // Close all other FAQ items (optional - remove if you want multiple open)
      // faqQuestions.forEach(q => {
      //   if (q !== question) {
      //     q.setAttribute('aria-expanded', 'false');
      //     q.parentElement.classList.remove('active');
      //   }
      // });
      
      // Toggle current item
      question.setAttribute('aria-expanded', !isExpanded);
      faqItem.classList.toggle('active', !isExpanded);
    });
  });
}

// Detail Section Accordion functionality
function initDetailSections() {
  // Use event delegation on the main content container for better performance and nested section support
  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    // Fallback to document if main-content doesn't exist
    const detailHeaders = document.querySelectorAll('.detail-section-header');
    detailHeaders.forEach(header => {
      header.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const detailSection = this.parentElement;
        if (!detailSection || !detailSection.classList.contains('detail-section')) return;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        detailSection.classList.toggle('active', !isExpanded);
      });
    });
    return;
  }
  
  mainContent.addEventListener('click', function(e) {
    const header = e.target.closest('.detail-section-header');
    if (!header) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const detailSection = header.parentElement;
    if (!detailSection || !detailSection.classList.contains('detail-section')) return;
    
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    
    // Toggle current item
    header.setAttribute('aria-expanded', !isExpanded);
    detailSection.classList.toggle('active', !isExpanded);
  });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe cards and sections
  const animatedElements = document.querySelectorAll('.card, .stat-card, .section');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initTableSorting();
  initTableSearch();
  initContactForm();
  initFAQAccordion();
  initDetailSections();
  initSmoothScrolling();
  initScrollAnimations();
  
  // Add loading complete class
  document.body.classList.add('loaded');
});

// Handle window resize
window.addEventListener('resize', () => {
  // Recalculate any layout-dependent features
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    // Ensure table responsiveness
    if (table.scrollWidth > table.clientWidth) {
      table.parentElement.style.overflowX = 'auto';
    }
  });
});

// Export functions for potential external use
window.AIAgriBench = {
  initDarkMode,
  initTableSorting,
  initTableSearch,
  initContactForm,
  initFAQAccordion,
  initDetailSections,
  initSmoothScrolling,
  initScrollAnimations
};
