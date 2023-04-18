import html5 from "../assets/languages/html5.png";
import css3 from "../assets/languages/css3.png";
import bootstrap4 from "../assets/languages/bootstrap.png";
import python from "../assets/languages/python.png";
import react from "../assets/languages/reactjs.png";
import nodejs from "../assets/languages/nodejs.png";
import javascript from "../assets/languages/javascript5.png";
import sql from "../assets/languages/database.jpeg";
import vue from "../assets/languages/vuejs.png";
import sass from "../assets/languages/sass.png";


export const data = {
  languages: [
    {
      type: "html5",
      icon: "fab fa-html5",
      modal_target: "#myModal",
      fade: "fade-down-right",
    },
    {
      type: "css3",
      icon: "fab fa-css3-alt",
      modal_target: "#myModal2",
      fade: "fade-down",
    },
    {
      type: "bootstrap4",
      icon: "fab fa-bootstrap",
      modal_target: "#myModal3",
      fade: "fade-down-left",
    },
    {
      type: "reactjs",
      icon: "fab fa-react",
      modal_target: "#myModal4",
      fade: "fade-right",
    },
    {
      type: "pythonJ",
      icon: "fab fa-python",
      modal_target: "#myModal5",
      fade: "fade-up",
    },
    {
      type: "nodejs",
      icon: "fab fa-node",
      modal_target: "#myModal6",
      fade: "fade-left",
    },
    {
      type: "database",
      icon: "fas fa-database",
      modal_target: "#myModal7",
      fade: "fade-up-right",
    },
    {
      type: "javascript",
      icon: "fab fa-js",
      modal_target: "#myModal8",
      fade: "fade-up",
    },
    {
      type: "vuejs",
      icon: "fab fa-vuejs",
      modal_target: "#myModal9",
      fade: "fade-up-right",
    },
    {
      type: "sass",
      icon: "fab fa-sass",
      modal_target: "#myModal10",
      fade: "fade-up-left",
    },
  ],
  languages_modal: [
    {
      type: "html5",
      image: html5,
      modal_target: "#myModal",
      content: {
        title: "HTML 5",
        sub_title: "Description",
        paragraph: `HTML stands for Hyper Text Markup Language. HTML is the
            standard markup language for creating Web pages. HTML allows
            the user to create and structure sections, paragraphs,
            headings, links, and blockquotes for web pages and
            applications.`,
        progress_bar_percentage: "html",
        progress_bar_label: "90%",
        skill_level: "Experienced",
        skill_experience: "1 year, 6 months",
      },
    },
    {
      type: "css3",
      image: css3,
      modal_target: "#myModal2",
      content: {
        title: "CSS 3",
        sub_title: "Description",
        paragraph: `CSS is the language for describing the presentation of Web
            pages, including colors, layout, and fonts.`,
        progress_bar_percentage: "css",
        progress_bar_label: "75%",
        skill_level: "Experienced",
        skill_experience: "1 year, 6 months",
      },
    },
    {
      type: "bootstrap",
      image: bootstrap4,
      modal_target: "#myModal3",
      content: {
        title: "Bootstrap 4",
        sub_title: "Description",
        paragraph: `Bootstrap is a potent front-end framework used to create
            modern websites, web apps and mobile applications.`,
        progress_bar_percentage: "bootstrap",
        progress_bar_label: "80%",
        skill_level: "Experienced",
        skill_experience: "1 year, 6 months",
      },
    },
    {
      type: "react",
      image: react,
      modal_target: "#myModal4",
      content: {
        title: "React js",
        sub_title: "Description",
        paragraph: `React is an open-source, front end, JavaScript library for
              building user interfaces and the creation of using reusable
              user interface components. It is maintained by Facebook and
              a community of individual developers and companies. React
              can be used as a base in the development of single-page or
              mobile applications.`,
        progress_bar_percentage: "react",
        progress_bar_label: "50%",
        skill_level: "Skillful",
        skill_experience: "6 months",
      },
    },
    {
      type: "python",
      image: python,
      modal_target: "#myModal5",
      content: {
        title: "Python",
        sub_title: "Description",
        paragraph: `Python is an interpreted, high-level and general-purpose
              programming language. Python's design philosophy emphasizes
              code readability with its notable use of significant
              whitespace. Its language constructs and object-oriented
              approach aim to help programmers write clear, logical code
              for small and large-scale projects.`,
        progress_bar_percentage: "python",
        progress_bar_label: "75%",
        skill_level: "Skillful",
        skill_experience: "6 months",
      },
    },
    {
      type: "nodejs",
      image: nodejs,
      modal_target: "#myModal6",
      content: {
        title: "Node js",
        sub_title: "Description",
        paragraph: `Node.js is used for traditional web sites and back-end API
            services, but was designed with real-time, push-based
            architectures in mind.`,
        progress_bar_percentage: "node",
        progress_bar_label: "75%",
        skill_level: "Skillful",
        skill_experience: "1 year",
      },
    },
    {
      type: "databases",
      image: sql,
      modal_target: "#myModal7",
      content: {
        title: "Databases",
        content_title: "SQL • postgreSQL • MongoDB",
        sub_title: "Description",
        paragraph: `MySQL is an open-source relational database management
            system like storing, manipulating and retrieving data in
            databases.\n MongoDB is a source-available cross-platform
            document-oriented database program. Classified as a NoSQL
            database program, MongoDB uses JSON-like documents with
            optional schemas. \n PostgreSQL, also known as Postgres, is a free and
            open-source relational database management system
            emphasizing extensibility and SQL compliance.`,
        progress_bar_percentage: "node",
        progress_bar_label: "65%",
        skill_level: "Experienced",
        skill_experience: "1 year, 6 months",
      },
    },
    {
      type: "javascript",
      image: javascript,
      modal_target: "#myModal8",
      content: {
        title: "JavaScript",
        sub_title: "Description",
        paragraph: `JavaScript is a text-based programming language used both on
            the client-side and server-side that allows you to make web
            pages interactive.`,
        progress_bar_percentage: "js",
        progress_bar_label: "60%",
        skill_level: "Skillful",
        skill_experience: "1 year, 6 months",
      },
    },
    {
      type: "vue",
      image: vue,
      modal_target: "#myModal9",
      content: {
        title: "Vue",
        sub_title: "Description",
        paragraph: `Vue is a progressive framework for building user interfaces.
            Unlike other monolithic frameworks, Vue is designed from the
            ground up to be incrementally adoptable. The core library is
            focused on the view layer only, and is easy to pick up and
            integrate with other libraries or existing projects. On the
            other hand, Vue is also perfectly capable of powering
            sophisticated Single-Page Applications when used in
            combination with modern tooling and supporting libraries.`,
        progress_bar_percentage: "vue",
        progress_bar_label: "60%",
        skill_level: "Skillful",
        skill_experience: "6 months",
      },
    },
    {
      type: "sass",
      image: sass,
      modal_target: "#myModal10",
      content: {
        title: "Sass",
        sub_title: "Description",
        paragraph: `Is a preprocessor scripting language that is used to
            simplify and streamline the process of writing CSS
            (Cascading Style Sheets). It adds several features to CSS,
            such as variables, nesting, functions, and mixins, which
            allow for more efficient and flexible styling of web pages.
            Sass code is compiled into regular CSS that can be used in
            web projects just like any other CSS code. Overall, Sass is
            a powerful tool for front-end developers who want to write
            maintainable and reusable CSS code.`,
        progress_bar_percentage: "sassBar",
        progress_bar_label: "65%",
        skill_level: "Skillful",
        skill_experience: "11 months",
      },
    },
  ],
};
