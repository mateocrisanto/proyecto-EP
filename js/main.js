// OneDeal — main.js

/* ---- Hamburger menu ---- */
(function () {
  const btn  = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
})();

/* ---- Accordion ---- */
(function () {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
})();

/* ---- OTP flow simulation ---- */
(function () {
  const phoneInput = document.getElementById('phoneInput');
  const otpBtn     = document.getElementById('otpBtn');
  const otpStep2   = document.getElementById('otpStep2');
  const otpVerify  = document.getElementById('otpVerify');
  const otpSuccess = document.getElementById('otpSuccess');
  if (!phoneInput || !otpBtn) return;

  otpBtn.addEventListener('click', () => {
    const phone = phoneInput.value.trim();
    if (phone.length < 9) {
      phoneInput.style.borderColor = '#EF4444';
      return;
    }
    phoneInput.style.borderColor = '';
    otpBtn.textContent = 'Enviando…';
    otpBtn.disabled = true;
    setTimeout(() => {
      otpBtn.textContent = '✓ SMS enviado';
      if (otpStep2) otpStep2.style.display = 'flex';
    }, 1200);
  });

  if (otpVerify) {
    otpVerify.addEventListener('click', () => {
      const code = document.getElementById('otpCode');
      if (!code || code.value.length < 4) {
        code.style.borderColor = '#EF4444';
        return;
      }
      otpVerify.textContent = 'Verificando…';
      otpVerify.disabled = true;
      setTimeout(() => {
        if (otpStep2) otpStep2.style.display = 'none';
        if (otpSuccess) otpSuccess.style.display = 'flex';
      }, 1000);
    });
  }
})();

/* ---- Smart order add to cart ---- */
(function () {
  const btn = document.getElementById('confirmOrderBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    btn.textContent = '✓ Pedido confirmado — llegará mañana';
    btn.style.background = '#22C55E';
    btn.disabled = true;
    const note = document.getElementById('orderConfirmNote');
    if (note) note.style.display = 'block';
  });
})();

/* ---- Smooth-scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---- Active nav link highlighting ---- */
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .navbar__mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ---- Intersection Observer for fade-in animations ---- */
(function () {
  if (!('IntersectionObserver' in window)) return;
  const els = document.querySelectorAll('.problem-card, .step-card, .feature-card, .benefit-card, .category-card');
  els.forEach(el => {
    el.style.opacity  = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 80 * (Array.from(els).indexOf(entry.target) % 6));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

