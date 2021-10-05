import React from "react";
import "./LandingPage.css";
import chad from "./img/chad-removebg.png";
import $ from "jquery";

const LandingPage = () => {

  $('.intro-img').onclick = () =>
    function () {
      $(".intro-img").ripples("show");
    };

  var example = [
    "Hallo wêreld, ek is <br/> <strong>Chad Hoosain</strong>", //afrinkaans
    "Molo weHlabathi, ndinguye <br/> <strong>Chad Hoosain</strong>", //xhosa
    "Sawubona Mhlaba, nginguye <br/> <strong>Chad Hoosain</strong>", //zulu
    "Nǐ hǎo shìjiè, wǒ shì <br/> <strong>Chad Hoosain</strong>", //chinese
    "Hola mundo, soy <br/> <strong>Chad Hoosain</strong>", //spanish
    "Kon'nichiwa sekai, watashi wa <br/> <strong>Chad Hoosain</strong>", // japanese
    "Olá mundo estou <br/> <strong>Chad Hoosain</strong>", //portuguese
    "Hello World, I am <br/> <strong>Chad Hoosain</strong>" //english
  ];

  var sub_example = [
    "Voornemende webontwikkelaar", //afrinkaans
    "Umnqweno wewebhu", //xhosa
    "Ufisa unjiniyela wewebhu", //zulu
    "Yǒu bàofù de Web kāifā rényuán", //chinese
    "Aspirante a desarrollador web", //spanish
    "Iyoku-tekina u~ebu kaihatsu-sha", // japanese
    "Aspirante a desenvolvedor web", //portuguese
    "Aspiring Web Developer" //english
  ];

  var span_example = [
    "Hardworking",
    "Dedicated",
    "Analytical",
    "Friendly",
    "Communicative",
    "Creative"
  ];



  var timeGap = 100000 // every 24hours (in 86,400,000 milliseconds) | every 30min (in 30000 milliseconds)

  // textSequence(0);
  // function textSequence(i) {
  //   if (example.length > i) {
  //     setTimeout(function () {
  //       document.getElementById("sequence").innerHTML = example[i];
  //       textSequence(++i);
  //     }, timeGap); // every 24hours (in 86,400,000 milliseconds)
  //   } else if (example.length === i) {
  //     // Loop
  //     textSequence(0);
  //   }
  // }

  // textSequence2(0);
  // function textSequence2(i) {
  //   if (sub_example.length > i) {
  //     setTimeout(function () {
  //       document.getElementById("sub-sequence").innerHTML = sub_example[i];
  //       textSequence2(++i);
  //     }, timeGap); // every 24hours (in 86,400,000 milliseconds)
  //   } else if (sub_example.length === i) {
  //     // Loop
  //     textSequence2(0);
  //   }
  // }

  textSequence3(0);
  function textSequence3(i) {
    if (span_example .length > i) {
      setTimeout(function () {
        document.getElementById("span-sequence").innerHTML = span_example [i];
        textSequence3(++i);
      }, 5000);
    } else if (span_example.length === i) {
      // Loop
      textSequence3(0);
    }
  }

  var i = 0;
var speed = 20;

function typeWriter() {
  if (i < span_example.length) {
    document.getElementById("span-sequence").innerHTML += span_example.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

  return (
    <section className="intro">
      {/* <h1 className='section-mainTitle animate__animated animate__bounce'>Hello World, I am <strong>Chad Hoosain</strong></h1> */}
      {/* <p className='section-sub'>Aspiring Full-Stack Developer</p> */}
      {/* <img src={chad} alt='intro-image' className='intro-img'/> */}
      <div className="container-fluid">
        <div className="row">
          <div id="left" className="col-sm-8 hero">
            <h1
              // id="sequence"
              className="animate__animated animate__bounce header "
            >
              Hello World, I am <br />
              <strong>Chad Hoosain</strong>
            </h1>
            <hr />
            <p 
              // id="sub-sequence" 
              className="sub-header" 
              data-aos="zoom-in-right"
            >
              <span id="span-sequence" data-aos="zoom-out-down" >Aspiring</span> Web Developer
            </p>
          </div>
          <div id="right" className="col-sm-4 hero-img" data-aos="zoom-out-down">
            <img src={chad} alt="CH" className="landing-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
