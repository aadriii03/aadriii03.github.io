// Loader inicial + typing hero
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("loader-overlay");
  const barFill = document.getElementById("loader-bar-fill");
  const loaderTextEl = document.getElementById("loader-text");
  const typingEl = document.getElementById("typing-text");

  const loaderText = "Bienvenido";
  const heroText = "Ingeniero Informático • Desarrollador Full-Stack";

  let i = 0;
  let heroIndex = 0;

  // ⏱️ CONTROL DE LOADER: Solo muestra el "Bienvenido" si han pasado más de 2 horas
  const lastVisit = localStorage.getItem('lastVisit');
  const currentTime = Date.now();
  const twoHours = 2 * 60 * 60 * 1000; // 2 horas en milisegundos
  
  const shouldShowLoader = !lastVisit || (currentTime - parseInt(lastVisit)) > twoHours;

  if (!shouldShowLoader) {
    // ⚡ Saltar loader - visita reciente
    if (overlay) {
      overlay.style.display = "none";
    }
    document.body.classList.remove("loading");
    typeHero();
  } else {
    // 🎬 Mostrar loader - primera visita o más de 2 horas
    localStorage.setItem('lastVisit', currentTime.toString());
    
    // Mostrar loader normal
    function typeLoader() {
      if (i < loaderText.length && loaderTextEl) {
        const span = document.createElement("span");
        span.textContent = loaderText.charAt(i);
        span.classList.add("letter-glow");
        loaderTextEl.appendChild(span);
        i++;
        setTimeout(typeLoader, 70);
      }
    }

    typeLoader();

    if (barFill) {
      setTimeout(() => {
        barFill.style.width = "100%";
      }, 300);
    }
  }

  function typeHero() {
    if (heroIndex < heroText.length && typingEl) {
      typingEl.textContent += heroText.charAt(heroIndex);
      heroIndex++;
      setTimeout(typeHero, 55);
    }
  }

  
// MENÚ MÓVIL DESPLEGABLE
// Drawer móvil izquierdo + backdrop
const toggle = document.getElementById("menu-toggle-mobile");
const menu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("mobile-backdrop");
const closeBtn = document.getElementById("menu-close");
const iconMobile = document.getElementById("menu-icon-mobile");

const hamburgerPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />';
const xPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';

function openMenu() {
  if (!menu || !backdrop) return;
  backdrop.classList.remove("hidden");
  menu.classList.remove("-translate-x-full");
  document.body.classList.add("overflow-hidden");
  if (iconMobile) iconMobile.innerHTML = xPath;
}

function closeMenu() {
  if (!menu || !backdrop) return;
  menu.classList.add("-translate-x-full");
  backdrop.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  if (iconMobile) iconMobile.innerHTML = hamburgerPath;
}

function isOpen() {
  return menu && !menu.classList.contains("-translate-x-full");
}

toggle.addEventListener('click', () => {
  if (isOpen()) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeBtn?.addEventListener("click", closeMenu);
backdrop?.addEventListener("click", closeMenu);

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOpen()) closeMenu();
});


// Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: ["#75020f", "#51080d", "#2b0307"] },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#51080d",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" }
    },
    modes: {
      grab: { distance: 130, line_linked: { opacity: 0.5 } }
    }
  },
  retina_detect: true
});

// Sistema de cambio de idioma
let currentLang = 'es';

// Diccionario de traducciones
const translations = {
  es: {
    loaderText: "Bienvenido",
    heroText: "Ingeniero Informático • Desarrollador Full-Stack",
    menu: {
      inicio: "Inicio",
      sobremi: "Sobre mí",
      tecnologias: "Tecnologías",
      softskills: "Soft Skills",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      estudios: "Estudios",
      certificaciones: "Certificaciones",
      contacto: "Contacto"
    },
    hero: {
      downloadCV: "Descargar CV"
    },
    section: {
      sobremi: "Sobre mí",
      softskills: "Soft Skills",
      tecnologias: "Tecnologías y Herramientas",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      estudios: "Estudios",
      certificaciones: "Certificaciones",
      contacto: "Contacto"
    },
    sobremi: {
      text1: "Soy estudiante de Ingeniería Informática en la Escuela Superior de Informática de la UCLM, apasionado por el diseño de aplicaciones y la gestión de proyectos.",
      text2: "Me interesa crear soluciones tecnológicas que generen un impacto real, cuidando tanto la funcionalidad como la experiencia de usuario.",
      text3: "Me considero una persona que sabe trabajar en equipo, con comunicación efectiva y resolutivo con los problemas que se me plantean.",
      text4: "Busco seguir formándome y aportar mi talento en proyectos que apuesten por la innovación, el trabajo colaborativo y la mejora constante."
    },
    softskills: {
      proactividad: "Proactividad",
      trabajo: "Trabajo<br>en equipo",
      analitico: "Pensamiento Analítico",
      comunicativas: "Habilidades Comunicativas",
      adaptabilidad: "Adaptabilidad",
      objetivos: "Orientado a Objetivos"
    },
    tecnologias: {
      lenguajes: "Lenguajes",
      frameworks: "Frameworks / CMS",
      entornos: "Entornos / Herramientas",
      gestion: "Gestión y organización"
    },
    proyectos: {
      pokedex: {
        desc: "Aplicación de escritorio inspirada en Pokémon que permite gestionar y consultar una Pokédex con información de cada pokemon, visualizar los Pokémon propios y realizar combates, ya sea en modo individual contra la IA o en modo multujugador con dos jugadores."
      },
      etfpro: {
        desc: "Aplicación web para analizar ETFs y gestionar carteras de inversión, integrando APIs financieras y dashboards interactivos."
      },
      alzheimeratlas: {
        desc: "Aplicación de escritorio diseñada para apoyar a pacientes con Alzheimer y sus familiares, ofreciendo secciones de consejos, ejercicios, lectura, juegos y contenido educativo sobre la enfermedad."
      },
      iker: {
        title: "Asociación Iker – Desarrollo Web",
        desc: "Diseño y desarrollo de una página web para la Asociación Iker, creada para mejorar la visibilidad de la entidad, facilitar la captación de socios y promover las donaciones. La plataforma está orientada tanto a personas afectadas por la enfermedad como a potenciales colaboradores, ofreciendo una buena experiencia de usuario."
      }
    },
    experiencia: {
      cfmana: {
        title: "Diseñador Web – CFManá",
        date: "Febrero 2023 – Mayo 2023",
        type: "Trabajo",
        desc: "Diseño e implementación de la página web para la academia CFManá, con foco en accesibilidad y experiencia de usuario. El proyecto se desarrolló con WIX para facilitar su actualización futura por parte del equipo."
      },
      iker: {
        title: "Diseñador Web – Asociación Iker",
        date: "Septiembre 2025 – Actualidad",
        type: "Voluntariado",
        desc: "Desarrollo de la nueva página web de la asociación, con especial foco en voluntariado, eventos y comunicación. Se empleó WordPress para permitir una gestión autónoma del contenido."
      },
      premio: {
        title: "Primer Premio – III Edición Digital Builders",
        date: "NTT DATA Europe & Latam · Noviembre 2025",
        type: "Concurso / Premio",
        desc: "Reconocimiento otorgado por NTT DATA Europe & Latam y la Escuela Superior de Informática por el desarrollo del mejor proyecto de consultoría tecnológica, destacando el análisis estratégico, la innovación propuesta y la presentación del caso final en equipo."
      }
    },
    estudios: {
      ingles: {
        title: "Inglés B1 – Trinity College London",
        desc: 'Certificado oficial de competencia comunicativa en inglés, avalado por el <span class="font-medium text-[#1c3d5a]">Marco Común Europeo de Referencia para las Lenguas (MCERL)</span>, que evalúa comprensión auditiva, expresión oral y escrita.',
        level: "Nivel B1 – CEFR"
      },
      uimp: {
        title: "Curso de Inmersión Lingüística Inglesa – Universidad Internacional Menéndez Pelayo (UIMP)",
        desc: 'Programa intensivo de <span class="font-medium text-[#1c3d5a]">40 horas</span> centrado en el desarrollo de la fluidez comunicativa y la comprensión oral en inglés, mediante actividades prácticas con profesores nativos de Reino Unido, Canadá, Estados Unidos e Irlanda.'
      },
      grado: {
        title: "Grado en Ingeniería Informática – Escuela Superior de Informática (Ciudad Real), Universidad de Castilla-La Mancha",
        date: "2019 – Actualidad",
        desc: 'Formación universitaria orientada al desarrollo de soluciones tecnológicas y gestión de proyectos informáticos, con especialización en <span class="font-medium text-[#1c3d5a]">Tecnologías de la Información (TI)</span>.'
      }
    },
    certificaciones: {
      marketing: {
        title: "Fundamentos de Marketing Digital",
        desc: 'Certificación de cursos de google junto con <span class="font-medium text-[#1c3d5a]">IAB de Europa y The Open University</span> en Fundamentos de Marketing Digital con una <span class="font-medium text-[#1c3d5a]">duración de 40 horas</span>.'
      },
      apps: {
        title: "Fundamentos de Desarrollo de Apps Móviles",
        desc: 'Certificación de cursos de google junto con la <span class="font-medium text-[#1c3d5a]">Universidad Complutense de Madrid</span> en Fundamentos de Desarrollo de Apps Móviles con una <span class="font-medium text-[#1c3d5a]">duración de 40 horas</span>.'
      },
      uimp: {
        title: "Inmersión Lingüística Inglesa",
        desc: 'Durante el verano de 2022, fui beneficiario de una beca otorgada por la <span class="font-medium text-[#1c3d5a]">Universidad Internacional Menéndez Pelayo (UIMP)</span> para participar en un curso de inmersión lingüística en inglés, que consistió en una formación intensiva con hablantes nativos, centradas en conversación, comunicación efectiva y habilidades sociales.'
      },
      trinity: {
        title: "Inglés B1 – Trinity College London",
        desc: 'Acreditación oficial de nivel <span class="font-medium text-[#1c3d5a]">B1</span> según el <span class="font-medium text-[#1c3d5a]">Marco Común Europeo de Referencia para las Lenguas (MCERL)</span>, que certifica las competencias en comprensión auditiva, expresión oral y escrita en inglés.'
      },
      cibse: {
        title: "Certificados de Asistencia – CIBSE, ESI Ciudad Real",
        desc: 'Participación en los seminarios organizados por la <span class="font-medium text-[#1c3d5a]">Ibero-American Conference on Software Engineering (CIBSE)</span>, centrados en sostenibilidad, ingeniería de software y aplicaciones de inteligencia artificial en entornos profesionales, con una <span class="font-medium text-[#1c3d5a]">duración de 20 horas</span>.'
      },
      btn: "Ver certificado",
      btnTitle: "Ver título",
      btnCerts: "Ver certificados"
    },
    contacto: {
      text: "¿Quieres contactar conmigo? Escríbeme o visita mis redes."
    },
    footer: "© Adrián Caballero Camacho"
  },
  en: {
    loaderText: "Welcome",
    heroText: "Computer Engineer • Full-Stack Developer",
    menu: {
      inicio: "Home",
      sobremi: "About Me",
      tecnologias: "Technologies",
      softskills: "Soft Skills",
      proyectos: "Projects",
      experiencia: "Experience",
      estudios: "Education",
      certificaciones: "Certifications",
      contacto: "Contact"
    },
    hero: {
      downloadCV: "Download CV"
    },
    section: {
      sobremi: "About Me",
      softskills: "Soft Skills",
      tecnologias: "Technologies and Tools",
      proyectos: "Projects",
      experiencia: "Experience",
      estudios: "Education",
      certificaciones: "Certifications",
      contacto: "Contact"
    },
    sobremi: {
      text1: "I am a Computer Engineering student at UCLM School of Computer Science, passionate about application design and project management.",
      text2: "I am interested in creating technological solutions that generate real impact, taking care of both functionality and user experience.",
      text3: "I consider myself a person who knows how to work in a team, with effective communication and resolute with the problems I face.",
      text4: "I seek to continue training and contribute my talent in projects that bet on innovation, collaborative work and constant improvement."
    },
    softskills: {
      proactividad: "Proactivity",
      trabajo: "Teamwork",
      analitico: "Analytical Thinking",
      comunicativas: "Communication Skills",
      adaptabilidad: "Adaptability",
      objetivos: "Goal Oriented"
    },
    tecnologias: {
      lenguajes: "Languages",
      frameworks: "Frameworks / CMS",
      entornos: "Environments / Tools",
      gestion: "Management and organization"
    },
    proyectos: {
      pokedex: {
        desc: "Desktop application inspired by Pokémon that allows you to manage and consult a Pokédex with information about each pokemon, view your own Pokémon and engage in battles, either in single-player mode against AI or in multiplayer mode with two players."
      },
      etfpro: {
        desc: "Web application to analyze ETFs and manage investment portfolios, integrating financial APIs and interactive dashboards."
      },
      alzheimeratlas: {
        desc: "Desktop application designed to support Alzheimer's patients and their families, offering sections on tips, exercises, reading, games, and educational content about the disease."
      },
      iker: {
        title: "Iker Association – Web Development",
        desc: "Design and development of a website for the Iker Association, created to improve the visibility of the entity, facilitate the acquisition of members and promote donations. The platform is aimed at both people affected by the disease and potential collaborators, offering a good user experience."
      }
    },
    experiencia: {
      cfmana: {
        title: "Web Designer – CFManá",
        date: "February 2023 – May 2023",
        type: "Work",
        desc: "Design and implementation of the website for the CFManá academy, with a focus on accessibility and user experience. The project was developed with WIX to facilitate future updates by the team."
      },
      iker: {
        title: "Web Designer – Iker Association",
        date: "September 2025 – Present",
        type: "Volunteering",
        desc: "Development of the association's new website, with a special focus on volunteering, events and communication. WordPress was used to allow autonomous content management."
      },
      premio: {
        title: "First Prize – III Digital Builders Edition",
        date: "NTT DATA Europe & Latam · November 2025",
        type: "Contest / Award",
        desc: "Recognition awarded by NTT DATA Europe & Latam and the School of Computer Science for the development of the best technology consulting project, highlighting the strategic analysis, proposed innovation and presentation of the final case as a team."
      }
    },
    estudios: {
      ingles: {
        title: "English B1 – Trinity College London",
        desc: 'Official certificate of communicative competence in English, endorsed by the <span class="font-medium text-[#1c3d5a]">Common European Framework of Reference for Languages (CEFR)</span>, which evaluates listening comprehension, oral and written expression.',
        level: "Level B1 – CEFR"
      },
      uimp: {
        title: "English Language Immersion Course – International University Menéndez Pelayo (UIMP)",
        desc: 'Intensive <span class="font-medium text-[#1c3d5a]">40-hour</span> program focused on developing communicative fluency and oral comprehension in English, through practical activities with native teachers from the United Kingdom, Canada, United States and Ireland.'
      },
      grado: {
        title: "Bachelor's Degree in Computer Engineering – School of Computer Science (Ciudad Real), University of Castilla-La Mancha",
        date: "2019 – Present",
        desc: 'University education focused on the development of technological solutions and management of IT projects, with specialization in <span class="font-medium text-[#1c3d5a]">Information Technology (IT)</span>.'
      }
    },
    certificaciones: {
      marketing: {
        title: "Fundamentals of Digital Marketing",
        desc: 'Certification from Google courses together with <span class="font-medium text-[#1c3d5a]">IAB Europe and The Open University</span> in Fundamentals of Digital Marketing with a <span class="font-medium text-[#1c3d5a]">duration of 40 hours</span>.'
      },
      apps: {
        title: "Fundamentals of Mobile App Development",
        desc: 'Certification from Google courses together with the <span class="font-medium text-[#1c3d5a]">Complutense University of Madrid</span> in Fundamentals of Mobile App Development with a <span class="font-medium text-[#1c3d5a]">duration of 40 hours</span>.'
      },
      uimp: {
        title: "English Language Immersion",
        desc: 'During the summer of 2022, I was awarded a scholarship granted by the <span class="font-medium text-[#1c3d5a]">International University Menéndez Pelayo (UIMP)</span> to participate in an English language immersion course, which consisted of intensive training with native speakers, focused on conversation, effective communication and social skills.'
      },
      trinity: {
        title: "English B1 – Trinity College London",
        desc: 'Official accreditation of <span class="font-medium text-[#1c3d5a]">B1</span> level according to the <span class="font-medium text-[#1c3d5a]">Common European Framework of Reference for Languages (CEFR)</span>, which certifies skills in listening comprehension, oral and written expression in English.'
      },
      cibse: {
        title: "Attendance Certificates – CIBSE, ESI Ciudad Real",
        desc: 'Participation in seminars organized by the <span class="font-medium text-[#1c3d5a]">Ibero-American Conference on Software Engineering (CIBSE)</span>, focused on sustainability, software engineering and artificial intelligence applications in professional environments, with a <span class="font-medium text-[#1c3d5a]">duration of 20 hours</span>.'
      },
      btn: "View certificate",
      btnTitle: "View title",
      btnCerts: "View certificates"
    },
    contacto: {
      text: "Want to contact me? Write me or visit my social networks."
    },
    footer: "© Adrián Caballero Camacho"
  }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
  currentLang = lang;
  
  // Actualizar el atributo lang del HTML
  document.getElementById('html-root').setAttribute('lang', lang);
  
  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[lang];
    
    // Navegar por el objeto de traducciones
    for (let k of keys) {
      translation = translation[k];
    }
    
    // Aplicar traducción
    if (translation) {
      if (element.hasAttribute('data-i18n-html')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
  
  // Actualizar el texto del hero (typing text)
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    typingEl.textContent = translations[lang].heroText;
  }
  
  // Guardar preferencia
  localStorage.setItem('preferredLanguage', lang);
}

const langToggle = document.getElementById('lang-toggle-desktop');
const langToggleMobile = document.getElementById('lang-toggle-mobile');

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
    langToggle.querySelector('span').textContent = newLang.toUpperCase();
    // Actualizar también el botón móvil si existe
    if (langToggleMobile) {
      langToggleMobile.querySelector('#lang-label-mobile').textContent = newLang.toUpperCase();
    }
  });
  
  // Cargar idioma guardado
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && savedLang !== 'es') {
    changeLanguage(savedLang);
    langToggle.querySelector('span').textContent = savedLang.toUpperCase();
    if (langToggleMobile) {
      langToggleMobile.querySelector('#lang-label-mobile').textContent = savedLang.toUpperCase();
    }
  }
}

// Event listener para el botón de idioma móvil
if (langToggleMobile) {
  langToggleMobile.addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
    langToggleMobile.querySelector('#lang-label-mobile').textContent = newLang.toUpperCase();
    // Actualizar también el botón de escritorio si existe
    if (langToggle) {
      langToggle.querySelector('span').textContent = newLang.toUpperCase();
    }
  });
}

// Animación general al hacer scroll
const elements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Animación "Sobre mí"
const sobreMi = document.querySelector('#sobremi');
const spans = document.querySelectorAll('#sobremi p span');

if (sobreMi) {
  const obsSobreMi = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        spans.forEach((span, i) => {
          span.style.animation = 'none';
          setTimeout(() => {
            span.style.animation = '';
            span.style.animationDelay = `${i * 0.3}s`;
            span.style.animationPlayState = 'running';
          }, 10);
        });
      } else {
        spans.forEach(span => {
          span.style.animationPlayState = 'paused';
        });
      }
    });
  }, { threshold: 0.3 });

  obsSobreMi.observe(sobreMi);
}

// Menú lateral activo
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#side-menu .menu-btn");

const observerMenu = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`#side-menu a[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(btn => btn.classList.remove("active"));
      link?.classList.add("active");
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observerMenu.observe(section));

// Fade in secuencial
const fadeItems = document.querySelectorAll('.fade-in-sequence');
let fadeTimeouts = new Map();

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const timeout = setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200);
      fadeTimeouts.set(entry.target, timeout);
    } else {
      // Limpiar timeout y remover clase
      const timeout = fadeTimeouts.get(entry.target);
      if (timeout) clearTimeout(timeout);
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.3 });

fadeItems.forEach(item => fadeObserver.observe(item));

// Soft Skills animación secuencial
const softskills = document.querySelectorAll("#softskills .softskill-card");
let softskillsTimeouts = new Map();

const softskillsObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const timeout = setTimeout(() => {
        const card = entry.target;
        card.classList.add("visible", "animating");
        setTimeout(() => card.classList.remove("animating"), 800);
      }, i * 250);
      softskillsTimeouts.set(entry.target, timeout);
    } else {
      const timeout = softskillsTimeouts.get(entry.target);
      if (timeout) clearTimeout(timeout);
      entry.target.classList.remove("visible", "animating");
    }
  });
}, { threshold: 0.3 });

softskills.forEach(card => softskillsObserver.observe(card));

// Proyectos animación secuencial
const projects = document.querySelectorAll("#proyectos .project-card");
let projectsTimeouts = new Map();

const projectsObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const timeout = setTimeout(() => {
        const card = entry.target;
        card.classList.add("visible", "animating");
        setTimeout(() => card.classList.remove("animating"), 800);
      }, i * 300);
      projectsTimeouts.set(entry.target, timeout);
    } else {
      const timeout = projectsTimeouts.get(entry.target);
      if (timeout) clearTimeout(timeout);
      entry.target.classList.remove("visible", "animating");
    }
  });
}, { threshold: 0.3 });

projects.forEach(card => projectsObserver.observe(card));

  // Para mostrar o no el texto de bienvenido si han pasado menos de 2 horas


  
  setTimeout(() => {
    if (overlay && shouldShowLoader) {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
        typeHero();
      }, 700);
    } else if (!shouldShowLoader) {
      // Ya se ejecutó typeHero antes
    } else {
      typeHero();
    }
  }, 3000);
});

// Animación secuencial de los contenedores de las tecnologías
const techCards = document.querySelectorAll('.tech-card');
let techTimeouts = new Map();

const techObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const timeout = setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 120); // delay entre iconos
      techTimeouts.set(entry.target, timeout);
    } else {
      const timeout = techTimeouts.get(entry.target);
      if (timeout) clearTimeout(timeout);
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.3 });

techCards.forEach(card => techObserver.observe(card));
