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
      "workHistory": "Work History"
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
      "workHistory": "Experiência Profissional"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'pt',
    fallbackLng: 'en',
    debug: true,
    initImmediate: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;