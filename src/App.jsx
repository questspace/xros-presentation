import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./App.css";
// Images
import simulateWind from "./assets/images/simulate-wind-recongnize-buildings.jpg"
import externalAerodynamics from "./assets/images/external-aerodynamics-building.jpg"
import moveToZoomSignal from "./assets/images/move-to-zoom-signal.jpg"
import makingMusic from "./assets/images/making-music-dynamicland.jpg"
import aframeLogo from "./assets/images/aframe-logo.png";
import webxrThreejs from "./assets/images/webxr-threejs.jpg";
import xr3dObject from "./assets/images/xr-3d-object.jpg"
import arScience from "./assets/images/ar-science.jpg";
import communalScienceLab from "./assets/images/communal-science-lab.png";
import metaQuestPassthrough from "./assets/images/meta-quest-3-passthrough.png";
import northstarPerson from "./assets/images/northstar-person.jpg"
import northstarElectronics from "./assets/images/northstar-electronics.jpg"
import realtalkPapers from "./assets/images/realtalkos-papers.jpg"
import pharoImage from "./assets/images/pharo.png"

function App() {
  const deckDivRef = useRef(null); // reference to deck container div
  const deckRef = useRef(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      width: 1920,
      height: 1080,
      disableLayout: true,
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
      deckRef.current.sync();
    });

    return () => {
      try {
        if (deckRef.current?.isReady()) {
          console.log(deckRef.current);
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.", e);
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div ref={deckDivRef}>
      <div className="slides pt-10">
        <section className="p-10 flex items-center h-screen">
          <div className="font-bold text-8xl m-auto pt-96">
            QuestSpace Community meetup
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-10">
            Taking inspiration from Dynamicland
          </div>
          <iframe
            className="w-3/5 h-[660px] m-auto mt-0"
            src="https://dynamicland.org/2024/Intro/"
          />
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-10">
            Taking inspiration from Dynamicland
          </div>
          <div className="w-full flex flex-row justify-between gap-x-4">
            <img
              src={simulateWind}
              className="w-2/3"
            />
            <img
              src={externalAerodynamics}
              className="w-1/3"
            />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-10">
            Taking inspiration from Dynamicland
          </div>
          <div className="w-4/5 m-auto">
            <img src={moveToZoomSignal} className="w-full" />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-10">
            Taking inspiration from Dynamicland
          </div>
          <div className="w-4/5 m-auto">
            <img
              src={makingMusic}
              className="w-full"
            />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-4">
            QuestSpace - Communal Hackerspace...
          </div>
          <div className="font-bold text-3xl mb-10">...with a (XR) twist</div>
          <div className="w-2/3 m-auto">
            <img src={communalScienceLab} className="w-full" />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-32">QuestSpace XR + AI</div>
          <div className="font-bold text-4xl max-w-[1600px] mx-auto">
            <ul className="leading-loose">
              <li>
                Physical objects recognizable through headset / smartphone
              </li>
              <li>
                Digital overlays &mdash; useful, <u>interactive</u> information
                in 3D virtual space
              </li>
              <li>
                Real objects enhanced with digital overlays that can show
                real-time metrics, HW information, guides, saved 3D notes by the
                community, etc.
              </li>
              <li>
                Combining objects is also reflected in the digital overlays
                &mdash; framework needed
              </li>
              <li className="text-green-400">
                Virtual overlays <u>should facilitate significant speedups</u>{" "}
                for combining objects to build complex systems
              </li>
            </ul>
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">
            QuestSpace XR OS (early stage)
          </div>
          <div className="font-bold text-3xl mb-10">
            At first, focus on building fun experiments in WebXR!
          </div>
          <div className="w-1/2 m-auto p-10 -mt-10">
            <div className="w-full flex flex-row justify-between gap-x-4 gap-y-2 -mb-6">
              <img src={aframeLogo} className="w-1/3" />
              <img src={webxrThreejs} className="w-2/3" />
            </div>
            <div className="w-full flex flex-row justify-between gap-x-4">
              <img src={arScience} className="w-2/3" />
              <img src={xr3dObject} className="w-1/3" />
            </div>
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">XR experimentation</div>
          <div className="font-bold text-3xl mb-6 w-3/4 mx-auto">
            We have 2x Meta Quest 3 with color passthrough, which is able to
            work with WebXR
          </div>
          <div className="font-bold text-3xl mb-10 w-fit mx-auto p-4 border leading-relaxed text-left">
            ✅ Can work with WebXR, which is great for making fast prototypes
            <br />❌ We cannot use video feed from Meta Quest for Computer
            Vision / AI hacking
          </div>
          <div className="w-2/3 m-auto">
            <img
              src={metaQuestPassthrough}
              className="w-full"
            />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">Project Northstar</div>
          <div className="font-bold text-2xl mb-10 w-3/4 mx-auto">
            <blockquote className="text-left text-xl leading-relaxed">
              &quot;We envision a future where the physical and virtual worlds
              blends together into a single magical experience. At the heart of
              this experience is hand tracking, which unlocks interactions
              uniquely suited to virtual and augmented reality. To explore the
              boundaries of interactive design in AR, we created and open
              sourced Project North Star, which drove us to push beyond the
              limitations of existing systems.&quot; &mdash;Leap Motion
            </blockquote>
          </div>
          <div className="w-2/3 m-auto">
            <img src={northstarPerson} className="w-full" />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">Project Northstar</div>
          <div className="font-bold text-3xl mb-4">
            QuestSpace will receive 2x Project Northstar devices{" "}
            <u>within few days</u>! 🔥
            <br />
            We will be able to build collaborative experiences.
          </div>
          <div className="font-bold text-3xl w-fit mx-auto p-4 border leading-relaxed text-left">
            ✅ Can work with WebXR, which is great for making fast prototypes
            <br />✅ We can use video feed from Northstar for Computer Vision /
            AI hacking!
          </div>
          <iframe
            className="w-1/2 h-[520px] m-auto -mt-10"
            src="https://www.youtube-nocookie.com/embed/7m6J8W6Ib4w?si=TycC2gdPwxesIlOr&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">Project Northstar</div>
          <div className="font-bold text-3xl mb-10 w-3/4 mx-auto">
            Great community project to build the headsets together
          </div>
          <div className="w-2/3 m-auto">
            <img src={northstarElectronics} className="w-full" />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">
            Realtalk OS - Dynamicland &quot;backbone&quot;
          </div>
          <div className="font-bold text-2xl mb-10">
            Ties together physical hardware, allows embedding tangible things as
            &quot;objects&quot;, and provides a DSL to facilitate simplified
            programming
          </div>
          <div className="w-2/3 m-auto">
            <img src={realtalkPapers} className="px-10" />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">
            DSL - Domain-Specific Language
          </div>
          <div className="font-bold text-3xl mb-10">
            Programming language with a higher level of abstraction optimized
            for a specific class of problems
          </div>
          <iframe
            className="w-2/3 h-[680px] m-auto -mt-10"
            src="https://www.youtube-nocookie.com/embed/R81egpgDzbY?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-6">
            QuestSpace XR OS (future stage)
          </div>
          <div className="font-bold text-3xl mb-10">
            Writing XR OS hackable to the &quot;atomic&quot; core? Smalltalk
            (Pharo)
          </div>
          <div className="w-2/3 mx-auto">
            <img src={pharoImage} className="w-full" />
          </div>
        </section>

        <section className="p-10">
          <div className="font-bold text-7xl mb-32">QuestSpace community</div>
          <div className="font-bold text-4xl">
            <ul className="leading-loose">
              <li>We need to fill the space with creative, crazy people</li>
              <li>Dreamers and Makers: one group helps the other</li>
              <li>People who are excited about the future</li>
              <li>It&apos;s not just about the technology</li>
              <li>
                QuestSpace XR OS has to be simple and intuitive{" "}
                <u>for anybody</u>
              </li>
              <li>Feels like magic ✨</li>
            </ul>
          </div>
        </section>

        <section className="p-10 flex items-center h-screen">
          <div className="font-bold text-8xl m-auto pt-96">
            Q&A
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
