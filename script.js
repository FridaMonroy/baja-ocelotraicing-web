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
    'Isai': {
        name: 'Leonardo Campos',
        major: 'Ingeniería Mecatronica',
        role: 'Lider de Chasis y ergonomía',
        nickname: 'Leo',
        image: 'img/LEO.jpeg',
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