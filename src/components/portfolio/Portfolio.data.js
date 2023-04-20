import snake from "../assets/snake.jpg";
import gitfinder from "../assets/GitFinder.png";
import logger from "../assets/it-logger.jpg";
import pong from "../assets/pong.jpg";
import ecommerce from "../assets/e-commerce.jpg";
import codeplayer from "../assets/codeplayer.png";
import reactor from "../assets/reactor_game.png";
import contact_assist from "../assets/contact_assistant.png";
import lmj from "../assets/module_project.png";
import card_concentration from "../assets/card_concentration.png";
import weather_widget from "../assets/weather-widget.png";
// qr codes
import ecommerce_qr from "../assets/e-commerce_qrcode.png";
import codeplayer_qr from "../assets/qrcode_cp.png";
import gitfinder_qr from "../assets/gitfinder_qrcode.png";
import itlogger_qr from "../assets/it-logger_qrcode.png";
import lmj_qr from "../assets/lmj_qrcode.png";
import card_qr from "../assets/card_qr.png";
import weather_qr from "../assets/weather_qr.png";
import reactor_qr from "../assets/reactor_qrcode.png";

export const data = {
  projects: [
    {
      overlay_title: "Gitfinder",
      image: gitfinder,
      github_link: "https://github.com/ChadH28/Github-Finder",
      website_link: "https://gitfinderv1.netlify.app/",
      modal_target: "#detail-modal1",
    },
    {
      overlay_title: "IT Logger",
      image: logger,
      github_link: "https://github.com/ChadH28/IT-Logger",
      website_link: "https://it-loggerv1.netlify.app/",
      modal_target: "#detail-modal2",
    },
    {
      overlay_title: "Pong",
      image: pong,
      github_link:
        "https://github.com/ChadH28/Python_TurtleGames/blob/master/pong.py",
      website_link: "https://replit.com/@ChadHoosain/Pongpygame",
      modal_target: "#detail-modal3",
    },
    {
      overlay_title: "Snake",
      image: snake,
      github_link:
        "https://github.com/ChadH28/Python_TurtleGames/blob/master/slang%2Cslang.py",
      website_link: "https://replit.com/@ChadHoosain/Waterslangpygame",
      modal_target: "#detail-modal4",
    },
    {
      overlay_title: "Fineprint: Ecommerce website",
      image: ecommerce,
      github_link: "https://github.com/ChadH28/End-of-year-Project",
      website_link: "https://fineprint-ecommerce.herokuapp.com/",
      modal_target: "#detail-modal5",
    },
    {
      overlay_title: "Contact Assistant",
      image: contact_assist,
      github_link: "https://github.com/ChadH28/Contact-Keeper",
      website_link: "https://contact-assistant.herokuapp.com/",
      modal_target: "#detail-modal6",
    },
    {
      overlay_title: "Codeplayer: JQuery made code editor",
      image: codeplayer,
      github_link:
        "https://github.com/ChadH28/Codeplayer--Code-editor-using-JQuery",
      website_link:
        "https://chadh28.github.io/Codeplayer--Code-editor-using-JQuery/",
      modal_target: "#detail-modal7",
    },
    {
      overlay_title: "Reactor: Test your reactions",
      image: reactor,
      github_link: "https://github.com/ChadH28/Reactor--Javascript-game",
      website_link: "https://chadh28.github.io/Reactor--Javascript-game/",
      modal_target: "#detail-modal8",
    },
    {
      overlay_title: "Lmj: A page to do with all things funny",
      image: lmj,
      github_link:
        "https://github.com/ChadH28/Web-Design-End-of-module-Project",
      website_link:
        "https://chadh28.github.io/Web-Design-End-of-module-Project/",
      modal_target: "#detail-modal9",
    },
    {
      overlay_title: "Weather Widget",
      image: weather_widget,
      github_link: "https://github.com/ChadH28/Weather-Widget",
      website_link: "https://chadh28.github.io/Weather-Widget/",
      modal_target: "#detail-modal10",
    },
    {
      overlay_title: "Card Concentration: Test your card memory",
      image: card_concentration,
      github_link: "https://github.com/ChadH28/Card-Concentration",
      website_link: "https://chadh28.github.io/Card-Concentration/",
      modal_target: "#detail-modal10",
    },
  ],
  project_modals: [
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `React app to search Github profiles. This app uses the
      Context API along with the useContext and useReducer hooks
      for state management within the app.`,
      qr_image: gitfinder_qr,
      modal_target: "#detail-modal1",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `React app to track IT department tasks and issues. Uses
      JSON-Server as a mock backend.`,
      qr_image: itlogger_qr,
      modal_target: "#detail-modal2",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `P-V-P game made through turtle module in pycharm.`,
      qr_image: null,
      modal_target: "#detail-modal3",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `The nostalgic Nokia 3310 game everybody used to play and
      rave about in the early 2000s made through turtle module in
      pycharm.`,
      qr_image: null,
      modal_target: "#detail-modal4",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `React app to create an E-commerce platform which allows
      users to buy plain unprinted clothes with the option to buy
      as is or use the companies printing facilities.`,
      qr_image: ecommerce_qr,
      modal_target: "#detail-modal5",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `Full stack React project which has contact manager with
      React hooks, context, sessions & JWT authentication.`,
      qr_image: null,
      modal_target: "#detail-modal6",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `A JQuery made code generator similiar to codepen where users
      can learn to code on`,
      qr_image: codeplayer_qr,
      modal_target: "#detail-modal7",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `A Javascript made game to test users reactions.`,
      qr_image: reactor_qr,
      modal_target: "#detail-modal8",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `First end of Module task. Used form-validation, modals,
      cards and a navbar. Used Bootstrap and custom css stylings.`,
      qr_image: lmj_qr,
      modal_target: "#detail-modal9",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `Made with Vuejs and fetched data from openweatherapi (Daily
        forecast & 7 day forecast)`,
      qr_image: weather_qr,
      modal_target: "#detail-modal10",
    },
    {
      modal_title: "Barcode",
      modal_subtitle: "Description",
      modal_description: `A 2-player Concentration game with a 52 deck card, user has
      to match a card with equal value and equal color pairs e.g
      (2 HEARTS + 2 DAIMONDS is a pair). Made with Vuejs`,
      qr_image: card_qr,
      modal_target: "#detail-modal11",
    },
  ],
};
