import "./styles/main.css"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { ArrowDown, HeartStraight } from "@phosphor-icons/react";
import profile from "/src/assets/img/placeholder.png"

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

import Typewriter from "typewriter-effect"

function App() {
  return (
    <div className="text-white">
        <ScrollContainer className="">
          <ScrollPage>
            <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-row justify-center">
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                  <div className="text-2xl flex flex-col gap-2">
                    <span className="font-bold">Olá, eu sou Rodrigo Meliande,</span>
                    <span className="flex text-black">
                      <Typewriter
                      options={{
                        strings: ['desenvolvedor web','cientista de dados','estudante','parceiro'],
                        autoStart: true,
                        loop: true,
                      }}/> <span className="text-white">que busca</span></span>
                      <span>facilitar a vida das pessoas</span>
                      <span>através da programação</span>
                  </div>
                </Animator>
                <ArrowDown size={45} className="animate-bounce absolute bottom-2" />
            </div>
          </ScrollPage>
          <ScrollPage>
            <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center">
              <ArrowDown size={45} className="animate-bounce absolute bottom-2" />
            </div>
          </ScrollPage>
          <ScrollPage>
          <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row justify-center">
              <ArrowDown size={45} className="animate-bounce absolute bottom-2" />
          </div>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <span className="text-black">Conheça mais sobre mim.</span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
    </div>
  )
}
export default App
