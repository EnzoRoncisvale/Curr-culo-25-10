// Enzo Roncisvale - Portfolio & Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      });
    });
  }

  // --- Navbar Scroll Styling ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-lg', 'shadow-slate-950/40', 'border-slate-800');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-slate-950/40');
    }
  });

  // --- Interactive Contact Form Handler ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const subject = document.getElementById('emailSubject').value.trim();
      const message = document.getElementById('emailMessage').value.trim();

      const mailtoUrl = `mailto:enzoroncisvale@gmail.com?subject=${encodeURIComponent(
        `[Contato Portfólio] ${subject}`
      )}&body=${encodeURIComponent(
        `Olá Enzo,\n\nMeu nome é ${name}.\n\n${message}\n\nAtenciosamente,\n${name}`
      )}`;

      window.location.href = mailtoUrl;
      showToast('Abrindo seu aplicativo de e-mail...');
    });
  }
});

// --- Clipboard Copy Helper & Toast Notification ---
function copyToClipboard(text, customMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customMessage || 'Copiado para a área de transferência!');
    }).catch(() => {
      fallbackCopyText(text, customMessage);
    });
  } else {
    fallbackCopyText(text, customMessage);
  }
}

function fallbackCopyText(text, customMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(customMessage || 'Copiado para a área de transferência!');
  } catch (err) {
    showToast('Não foi possível copiar automaticamente.');
  }
  textArea.remove();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}
