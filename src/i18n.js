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
      "issuer": "Issuer",
      "workHistory": "Work History",
      "workHighlights": "Highlights",
      "workSummary": "Other Activities",
      "workTechnologies": "Main Technologies",
      "brazil": "Brazil",
      "printCV": "Print CV",
      "exportToPDF": "Export to PDF",
      "footerDescription": "Created by Eduardo Palma Vieira de Moraes with React + Material-UI.",
      "footerSource": "The code is open source and can be found on ",
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
      "issuer": "Emissor",
      "workHistory": "Experiência Profissional",
      "workHighlights": "Destaques",
      "workSummary": "Outras Atividades",
      "workTechnologies": "Principais Tecnologias",
      "brazil": "Brasil",
      "printCV": "Imprimir CV",
      "exportToPDF": "Salvar como PDF",
      "footerDescription": "Criado por Eduardo Palma Vieira de Moraes com React + Material-UI.",
      "footerSource": "O código fonte é aberto e pode ser encontrado no ",
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