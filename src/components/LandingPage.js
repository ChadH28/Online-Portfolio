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

  var timeGap = 1800000 // every 24hours (in 86,400,000 milliseconds) | every 30min (in 30000 milliseconds)

  textSequence(0);
  function textSequence(i) {
    if (example.length > i) {
      setTimeout(function () {
        document.getElementById("sequence").innerHTML = example[i];
        textSequence(++i);
      }, timeGap); // every 24hours (in 86,400,000 milliseconds)
    } else if (example.length == i) {
      // Loop
      textSequence(0);
    }
  }

  textSequence2(0);
  function textSequence2(i) {
    if (sub_example.length > i) {
      setTimeout(function () {
        document.getElementById("sub-sequence").innerHTML = sub_example[i];
        textSequence2(++i);
      }, timeGap); // every 24hours (in 86,400,000 milliseconds)
    } else if (sub_example.length == i) {
      // Loop
      textSequence2(0);
    }
  }


  return (
    <section className="intro">
      {/* <h1 className='section-mainTitle animate__animated animate__bounce'>Hello World, I am <strong>Chad Hoosain</strong></h1> */}
      {/* <p className='section-sub'>Aspiring Full-Stack Developer</p> */}
      {/* <img src={chad} alt='intro-image' className='intro-img'/> */}
      <div class="container">
        <div class="row">
          <div id="left" class="col-sm-8">
            <h1
              id="sequence"
              className="animate__animated animate__bounce header "
            >
              Hello World, I am <br />
              <strong>Chad Hoosain</strong>
            </h1>
            <hr />
            <p id="sub-sequence" className="sub-header">
              Aspiring Web Developer
            </p>
          </div>
          <div id="right" class="col-sm-4">
            <img src={chad} alt="intro-image" className="landing-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
