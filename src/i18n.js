import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translations = {
  en: {
    translation: {
      "phone": "Phone",
      "location": "Location",
      "profile": "Profile",
      "education": "Education",
      "technicalSkills": "Technical Skills",
      "generalSkills": "Concepts & Methodologies",
      "languageSkills": "Languages",
      "certificates": "Certificates",
      "workHistory": "Work History",
      "workHighlights": "Highlights",
      "workSummary": "Other Activities",
      "workTechnologies": "Main Technologies",
      "brazil": "Brazil",
      "printCV": "Print CV",
      "exportToPDF": "Export to PDF",
      "en": "English",
      "pt": "Portuguese",
      "es": "Spanish"
    }
  },
  pt: {
    translation: {
      "phone": "Telefone",
      "location": "Localização",
      "profile": "Perfil",
      "education": "Educação",
      "technicalSkills": "Tecnologias",
      "generalSkills": "Conceitos & Metodologias",
      "languageSkills": "Línguas",
      "certificates": "Certificados",
      "workHistory": "Experiência Profissional",
      "workHighlights": "Destaques",
      "workSummary": "Outras Atividades",
      "workTechnologies": "Principais Tecnologias",
      "brazil": "Brasil",
      "printCV": "Imprimir CV",
      "exportToPDF": "Salvar como PDF",
      "en": "Inglês",
      "pt": "Português",
      "es": "Espanhol"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'pt',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;