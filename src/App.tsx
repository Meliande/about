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
 import { ArrowDown, HeartStraight } from "@phosphor-icons/react";

function App() {

  return (
    <div
      className="bg-slate-700 text-white"
    >
        <ScrollContainer className="">
        <ScrollPage>
          <div className="flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div id="">
                  <div>aaaaa</div>
                </div>
              </Animator>
              <ArrowDown size={30} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        <ScrollPage>
          <div className="flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div id="">
                  <img src="public/assets/img/datasci.jpg" alt="" />
                </div>
              </Animator>
              <ArrowDown size={30} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        </ScrollContainer>
        <div
          className="flex flex-row justify-center font-bold">
            Made by Rodrigo Meliande with React + Tailwind
        </div>
    </div>
  )
}
export default App
