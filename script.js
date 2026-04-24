function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function toggleEquipo(id) {
    let seccion = document.getElementById(id);

    if (seccion.style.display === "block") {
        seccion.style.display = "none";
    } else {
        seccion.style.display = "block";
    }
}

// DATOS DE LOS MIEMBROS (personaliza esto)
const teamMembers = {
    'Mike': {
        name: 'Miguel Villavicencio',
        major: 'Ingeniería Mecatrónica',
        role: 'Capitan',
        nickname: 'Mike',
        image: 'img/MIKE.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Brenda': {
        name: 'Brenda Hernández',
        major: 'Ingeniería Biónica',
        role: 'Líder de Administración',
        nickname: 'Caro',
        image: 'img/BRENDA.jpeg',
        linkedin: 'https://www.linkedin.com/in/brenda-carolina-hern%C3%A1ndez-flores-214b06301/'
    },
    'Rodrigo': {
        name: 'Rodrigo Salas',
        major: 'Ingeniería Mecatrónica',
        role: 'Responsable de Recursos materiales',
        nickname: 'RS',
        image: 'img/RODRIGO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Isai': {
        name: 'Isai Vilchis',
        major: 'Ingeniería Mecatronica',
        role: 'Lider de Suspensión, dirección y frenos',
        nickname: 'Sairo',
        image: 'img/ISAI.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Leo': {
        name: 'Leonardo Montes',
        major: 'Ingeniería Mecatronica',
        role: 'Lider de Chasis y ergonomía',
        nickname: 'Leo',
        image: 'img/LEO.jpeg',
        linkedin: 'https://www.linkedin.com/in/leonardomontesc?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    'Sasil': {
        name: 'Sasil Villareal',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de vinculación',
        nickname: 'Sasil',
        image: 'img/SASIL.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Frida': {
        name: 'Frida Monroy',
        major: 'Ingeniería Mecatronica',
        role: 'Recluta de Recursos materiales',
        nickname: 'Frida',
        image: 'img/FRIDA.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Aldo': {
        name: 'Aldo Morales',
        major: 'Ingeniería Biónicaa',
        role: 'Recluta de redes sociales',
        nickname: 'Aldo',
        image: 'img/ALDO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Anette': {
        name: 'Anette García',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de Chasís',
        nickname: 'Annete',
        image: 'img/ANETTE.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Lalo': {
        name: 'Eduardo Olvera',
        major: 'Ingeniería en Sistemas Automotrices',
        role: 'Recluta de Chasís',
        nickname: 'Lalote',
        image: 'img/LALOTE.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Diego': {
        name: 'Diego Martinez',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de Ergonomía y Presidente',
        nickname: 'Dieguito',
        image: 'img/DIEGO.jpeg',
        linkedin: 'https://www.linkedin.com/in/diego-mtz-stgo?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    'Karen': {
        name: 'Karen Flores',
        major: 'Ingeniería Mecatronica',
        role: 'Recluta de Ergonomía',
        nickname: 'Karen',
        image: 'img/KAREN.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    }
    ,
    'Christian': {
        name: 'Christian Rodriguez',
        major: 'Ingeniería Mecatronica',
        role: 'Lider de Telemetría',
        nickname: 'Chris',
        image: 'img/CHRISTIAN.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Caleb': {
        name: 'Caleb Riaño',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de Telemetría',
        nickname: 'Caleb',
        image: 'img/CALEB.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Yair': {
        name: 'Yair Ventura',
        major: 'Ingeniería Mecatronica',
        role: 'Recluta de Telemetría',
        nickname: 'Yayo',
        image: 'img/YAIR.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Poncho': {
        name: 'Alfonso Soriano',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de suspensión',
        nickname: 'Ponchete',
        image: 'img/PONCHO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Cesar': {
        name: 'Cesar Barron',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de dirección',
        nickname: 'Little Cesar',
        image: 'img/CESAR.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Asiel': {
        name: 'Asiel Méndez',
        major: 'Ingeniería Mecatronica',
        role: 'Recluta de Suspensión',
        nickname: 'Asiel',
        image: 'img/ASIEL.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Gera': {
        name: 'Gerardo Luna',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de frenos',
        nickname: 'Gera',
        image: 'img/GERA.jpeg',
        linkedin: 'https://www.linkedin.com/in/gerardo-luna-b46b39331?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    'Paul': {
        name: 'Paul Morales',
        major: 'Ingeniería Mecatronica',
        role: 'Recluta de frenos',
        nickname: 'Pol',
        image: 'img/PAUL.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Lalote': {
        name: 'Eduardo Rodriguez',
        major: 'Ingeniería Mecatronica',
        role: 'Líder de Manufactura',
        nickname: 'Lalo',
        image: 'img/LALO.jpeg',
        linkedin: 'https://www.linkedin.com/in/eduardorodriguezmedina?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    },
    'Goyo': {
        name: 'Irvin Lopez',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de Manufactura',
        nickname: 'Goyo',
        image: 'img/GOYO.jpeg',
        linkedin: 'https://www.linkedin.com/in/irvin-lopez-solano-95b3461a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    'Evelyn': {
        name: 'Evelyn Marquez',
        major: 'Ingeniería Mecatronica',
        role: 'Recluta de Manufactura',
        nickname: 'Compañera',
        image: 'img/EVELYN.jpeg',
        linkedin: 'https://www.linkedin.com/in/evelyne-itzel-marquez-meza-b86171331?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    },
    'Aaron': {
        name: 'Aaron Nériga',
        major: 'Ingenieria en Sistemas Automotrices',
        role: 'Líder de PowerTrain',
        nickname: 'Aaron',
        image: 'img/AARON.jpeg',
        linkedin: 'https://www.linkedin.com/in/aaron-neriga-01446726a?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    'JP': {
        name: 'Juan Pablo Hérnandez',
        major: 'Ingeniería en Sistema Automotrices',
        role: 'Responsable de CVT',
        nickname: 'JP',
        image: 'img/JP.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Marco': {
        name: 'Marco Piña',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable en PT delantero',
        nickname: 'MarcoPolo',
        image: 'img/MARCO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Dante': {
        name: 'Dante Luna',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de powertrain trasero ',
        nickname: 'Dante',
        image: 'img/DANTE.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Alfonso': {
        name: 'Alfonso De la Rosa',
        major: 'Ingeniería en Sistemas Automotrices',
        role: 'Recluta de PowerTrain trasero RWD ',
        nickname: 'Poncho2.0',
        image: 'img/ALFONSO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Irvin': {
        name: 'Irvin Plascencia ',
        major: 'Ingeniería en Sistemas Automotrices',
        role: 'Recluta PowerTrain delantero FWD ',
        nickname: 'Irvin',
        image: 'img/Irvin.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Miguel': {
        name: 'Miguel De Jesus',
        major: 'Ingeniería en Sistemas Automotrices',
        role: 'Recluta de CVT ',
        nickname: 'Miguel',
        image: 'img/MIGUEL.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    }
    // Agrega más miembros aquí
};

// ABRIR MODAL
function openModal(memberId) {
    const member = teamMembers[memberId];
    
    if (member) {
        document.getElementById('modalImg').src = member.image;
        document.getElementById('modalImg').alt = member.name;
        document.getElementById('modalName').textContent = member.name;
        document.getElementById('modalMajor').textContent = member.major;
        document.getElementById('modalRole').textContent = member.role;
        document.getElementById('modalNickname').textContent = member.nickname;
        document.getElementById('modalLinkedIn').href = member.linkedin;
        
        document.getElementById('teamModal').style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Evita scroll
    }
}

// CERRAR MODAL
function closeModal() {
    document.getElementById('teamModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura scroll
}

// Cerrar al hacer clic fuera del modal
window.onclick = function(event) {
    const modal = document.getElementById('teamModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener datos del formulario
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    department: document.getElementById('department').value,
    message: document.getElementById('message').value
  };
  
  // Aquí puedes:
  // 1. Enviar a un backend
  // 2. Usar EmailJS
  // 3. Usar Formspree
  // 4. Mostrar mensaje de éxito
  
  console.log('Datos del formulario:', formData);
  
  // Mensaje de éxito (simulado)
  alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
  
  // Limpiar formulario
  this.reset();
});

// Filtrar línea del tiempo por década
function filterTimeline(decade) {
  const items = document.querySelectorAll('.timeline-item');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Actualizar botón activo
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(decade)) {
      btn.classList.add('active');
    }
  });
  
  // Filtrar items
  items.forEach(item => {
    if (decade === 'all' || item.getAttribute('data-decade') === decade) {
      item.style.display = 'flex';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100);
    } else {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });
}

// Animación al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${entry.target.offsetTop * 0.001}s`;
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
  observer.observe(item);
});
// Función para mostrar/ocultar detalles
function toggleDetails(element) {
    // Evitar que se cierre si se hace clic en un enlace o botón
    if (event.target.closest('a') || event.target.closest('button')) {
        return;
    }
    
    // Toggle de la clase expanded
    element.classList.toggle('expanded');
    
    // Opcional: Cerrar otros items abiertos
    const allContents = document.querySelectorAll('.timeline-content');
    allContents.forEach(content => {
        if (content !== element && content.classList.contains('expanded')) {
            content.classList.remove('expanded');
        }
    });
}

// Opcional: Cerrar al hacer clic fuera
document.addEventListener('click', function(event) {
    const timelineContents = document.querySelectorAll('.timeline-content');
    let clickedInside = false;
    
    timelineContents.forEach(content => {
        if (content.contains(event.target)) {
            clickedInside = true;
        }
    });
    
    if (!clickedInside) {
        timelineContents.forEach(content => {
            content.classList.remove('expanded');
        });
    }
});
function toggleDetails(element) {
    if (event.target.closest('a') || event.target.closest('button')) {
        return;
    }
    
    element.classList.toggle('expanded');
    
    // Opcional: Cerrar otros items
    const allContents = document.querySelectorAll('.timeline-content');
    allContents.forEach(content => {
        if (content !== element && content.classList.contains('expanded')) {
            content.classList.remove('expanded');
        }
    });
}
function toggleCard(element) {
  // Verificar si ya está activo
  const isActive = element.classList.contains('active');

  // Cerrar todas las tarjetas abiertas (opcional, para mantenerlo limpio)
  document.querySelectorAll('.timeline-card.active').forEach(card => {
    card.classList.remove('active');
  });

  // Si no estaba activa, abrirla
  if (!isActive) {
    element.classList.add('active');
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuBtn || !navMenu) {
        console.error('❌ Error: No se encontró el botón o el menú. Revisa los IDs en el HTML.');
        return;
    }

    // Abrir/Cerrar menú
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        // Cambia el ícono a X cuando está abierto
        menuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Cerrar al tocar un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.textContent = '☰';
        });
    });

    // Cerrar al tocar fuera
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            menuBtn.textContent = '☰';
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuBtn.textContent = '☰';
        }
    });
});