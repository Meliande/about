import "./styles/main.css"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { ArrowDown, HeartStraight } from "@phosphor-icons/react";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
function App() {
  return (
    <div
      className="bg-slate-700 text-white"
    >
        <ScrollContainer className="">
        <ScrollPage>
          <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              </Animator>
              <ArrowDown size={30} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        <ScrollPage>
          <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div id="">
                </div>
              </Animator>
              <ArrowDown size={30} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        <ScrollPage>
          <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div id="">
                </div>
              </Animator>
              <ArrowDown size={30} className="animate-pulse absolute bottom-0" />
          </div>
          </ScrollPage>
          <ScrollPage>
            <div className="flex justify-center content-center">
              <span>
                <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                - I'm Dante Chun -
                <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ fontSize: "40px" }}>Done</span>
                <br/>
                  <span style={{ fontSize: "30px" }}>
                    There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                </span>
            </Animator>
          </ScrollPage>
            <ScrollPage>
              <Animator animation={ZoomInScrollOut}>
                <span>Entre em Contato</span>
              </Animator>
            </ScrollPage>
        </ScrollContainer>
        <div
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-row justify-center font-bold">
            Made by Rodrigo Meliande with React + Tailwind
        </div>
    </div>
  )
}
export default App
