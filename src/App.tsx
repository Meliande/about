import "./styles/main.css"
import { 
  Animator,
  ScrollContainer,
  ScrollPage, 
  batch, 
  Fade,  
  MoveOut, 
  Sticky, 
 } from "react-scroll-motion";
 import { ArrowDown } from "@phosphor-icons/react";

function App() {

  return (
    <div
      className="bg-slate-700 text-white"
    >
        <ScrollContainer className="">
        <ScrollPage>
          <div className="flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
                <div id="teste2">
                  <div>aaaaa</div>
                </div>
              </Animator>
              <ArrowDown size={60} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        <ScrollPage>
          <div className="flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
                <div id="teste2">
                  <div>bbbbb</div>
                </div>
              </Animator>
              <ArrowDown size={60} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        <ScrollPage>
          <div className="flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
                <div id="teste2">
                  <div>ccccc</div>
                </div>
              </Animator>
              <ArrowDown size={60} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        <ScrollPage>
          <div className="flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
                <div id="teste2">
                  <div>ddddd</div>
                </div>
              </Animator>
          </div>
          </ScrollPage>
        </ScrollContainer>
        <div
          className="flex flex-row justify-center font-bold">
            Made by Rodrigo Meliande with Vite + TailwindCSS
        </div>
    </div>
  )
}
export default App
