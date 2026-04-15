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
        linkedin: 'https://linkedin.com/in/pierre-alexis'
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
        major: 'ISISA',
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
        linkedin: 'https://linkedin.com/in/pierre-alexis'
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
        linkedin: 'https://linkedin.com/in/pierre-alexis'
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
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Goyo': {
        name: 'Irvin Lopez',
        major: 'Ingeniería Mecatronica',
        role: 'Responsable de Manufactura',
        nickname: 'Goyo',
        image: 'img/GOYO.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Evelyn': {
        name: 'Evelyn Marquez',
        major: 'Ingeniería Mecatronica',
        role: 'Recluta de Manufactura',
        nickname: 'Compañera',
        image: 'img/EVELYN.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
    },
    'Aaron': {
        name: 'Aaron Nériga',
        major: 'ISISA',
        role: 'Líder de PowerTrain',
        nickname: 'Aaron',
        image: 'img/AARON.jpeg',
        linkedin: 'https://linkedin.com/in/pierre-alexis'
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