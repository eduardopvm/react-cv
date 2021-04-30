import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//TODO: refactor translation keys
const translations = {
  en: {
    translation: {
      "phone": "Phone",
      "location": "Location",
      "information": "Information",
      "profile": "Profile",
      "education": "Education",
      "programmingSkills": "Programming Languages",
      "frameworkSkills": "Frameworks",
      "databaseSkills": "Databases",
      "environmentSkills": "Environments",
      "toolSkills": "Tools",
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
      "exportToPDFError": "Error exporting to PDF. Please contact the developer.",
      "footerDescription": "Created by Eduardo Palma Vieira de Moraes with React + Material-UI.",
      "footerSource": "The code is open source and can be found on ",
      "workload": "Workload",
      "en": "English",
      "pt": "Portuguese",
      "es": "Spanish",
      "skill-0": "Beginner",
      "skill-1": "Basic",
      "skill-2": "Proficient",
      "skill-3": "Advanced",
      "lang-1": "Basic",
      "lang-2": "Intermediate",
      "lang-3": "Fluent",
    }
  },
  pt: {
    translation: {
      "phone": "Telefone",
      "location": "Localização",
      "information": "Informações",
      "profile": "Perfil",
      "education": "Educação",
      "programmingSkills": "Linguagens de Programação",
      "frameworkSkills": "Frameworks",
      "databaseSkills": "Bancos de Dados",
      "environmentSkills": "Ambientes",
      "toolSkills": "Ferramentas",
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
      "exportToPDFError": "Erro ao exportar para PDF. Entre em contato com o desenvolvedor.",
      "footerDescription": "Criado por Eduardo Palma Vieira de Moraes com React + Material-UI.",
      "footerSource": "O código fonte é aberto e pode ser encontrado no ",
      "workload": "Carga Horária",
      "en": "Inglês",
      "pt": "Português",
      "es": "Espanhol",
      "skill-0": "Iniciante",
      "skill-1": "Básico",
      "skill-2": "Proficiente",
      "skill-3": "Avançado",
      "lang-skill-1": "Básico",
      "lang-skill-2": "Intermediário",
      "lang-skill-3": "Fluente",
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