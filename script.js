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
        name: 'Miguel Ochoa',
        major: 'Ingeniería Mecatronica',
        role: 'Capitan',
        nickname: 'Mike',
        image: 'img/MIKE.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Brenda': {
        name: 'Brenda Hernandez',
        major: 'Ingeniería Mecatronica',
        role: 'Líder de Administración',
        nickname: 'Caro',
        image: 'img/BRENDA.jpeg',
        linkedin: 'https://www.linkedin.com/in/brenda-carolina-hern%C3%A1ndez-flores-214b06301/'
    },
    'Rodrigo': {
        name: 'Rodrigo Salas',
        major: 'Ingeniería Mecatronica',
        role: 'Tesorero',
        nickname: 'Ro',
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
        name: 'Leonardo Campos',
        major: 'Ingeniería Mecatronica',
        role: 'Lider de Chasis y ergonomía',
        nickname: 'Leo',
        image: 'img/LEO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Sasil': {
        name: 'Sasil Villareal',
        major: 'Ingeniería Mecatronica',
        role: 'Relaciones Públicas',
        nickname: 'Sasil',
        image: 'img/SASIL.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Frida': {
        name: 'Frida Monroy',
        major: 'Ingeniería Mecatronica',
        role: 'Costos',
        nickname: 'Frida',
        image: 'img/FRIDA.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Aldo': {
        name: 'Aldo Gomez',
        major: 'Ingeniería Mecatronica',
        role: 'Marketing',
        nickname: 'Aldo',
        image: 'img/ALDO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Anette': {
        name: 'Anette Gomez',
        major: 'Ingeniería Mecatronica',
        role: 'Diseño CAD',
        nickname: 'Annete',
        image: 'img/ANETTE.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Lalo': {
        name: 'Lalo Gomez',
        major: 'Ingeniería Mecatronica',
        role: 'Analisis FEA',
        nickname: 'Lalote',
        image: 'img/LALOTE.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Diego': {
        name: 'Diego Hernandez',
        major: 'Ingeniería Mecatronica',
        role: 'Analisis FEA',
        nickname: 'Dieguito',
        image: 'img/DIEGO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Karen': {
        name: 'Karen Sandoval',
        major: 'Ingeniería Mecatronica',
        role: 'Analisis FEA',
        nickname: 'Karen',
        image: 'img/KAREN.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    }
    ,
    'Christian': {
        name: 'Christian Benitez',
        major: 'Ingeniería Mecatronica',
        role: 'Lider de Telemetría',
        nickname: 'Chris',
        image: 'img/CHRISTIAN.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Caleb': {
        name: 'Caleb Tacuba',
        major: 'Ingeniería Mecatronica',
        role: 'Ensamble',
        nickname: 'Caleb',
        image: 'img/CALEB.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Yair': {
        name: 'Yair Rosario',
        major: 'Ingeniería Mecatronica',
        role: 'Ensamble',
        nickname: 'Yayo',
        image: 'img/YAIR.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Poncho': {
        name: 'Alfonso Lindavista',
        major: 'Ingeniería Mecatronica',
        role: 'Ensamble',
        nickname: 'Poncho',
        image: 'img/PONCHO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Cesar': {
        name: 'Cesar Zocalo',
        major: 'Ingeniería Mecatronica',
        role: 'Ensamble',
        nickname: 'Cesar',
        image: 'img/CESAR.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Asiel': {
        name: 'Asiel Cuba',
        major: 'Ingeniería Mecatronica',
        role: 'Ensamble',
        nickname: 'Asiel',
        image: 'img/ASIEL.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Gera': {
        name: 'Gerardo Universidad',
        major: 'Ingeniería Mecatronica',
        role: 'Ensamble',
        nickname: 'Gera',
        image: 'img/GERA.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Paul': {
        name: 'Paul España',
        major: 'Ingeniería Mecatronica',
        role: 'Ensamble',
        nickname: 'Pol',
        image: 'img/PAUL.jpeg',
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