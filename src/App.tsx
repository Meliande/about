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
              <div className="w-screen px-24 grid grid-cols-2 gap-5">
                <div className="snap-mandatory scroll-smooth snap-x flex flex-row overflow-x-auto gap-1">
                  <img className="bg-slate-300 p-5 snap-center shadow-2xl" src="public/datasci.jpg" alt="" />
                  <img className="snap-center" src="public/datasci.jpg" alt="" />
                </div>
                <div className="break-all">
                  <p>
                    
                  </p>
                </div>
              </div>
            </Animator>
            <ArrowDown size={30} className="animate-bounce absolute bottom-0" />
          </div>
          </ScrollPage>
        <ScrollPage>
          <div className="flex flex-row justify-center">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <div className="w-screen px-24 grid grid-cols-2 gap-5">
                <div className="snap-mandatory snap-x flex flex-row overflow-x-auto gap-1">
                  <img className="snap-center" src="public/datasci.jpg" alt="" />
                  <img className="snap-center" src="public/datasci.jpg" alt="" />
                </div>
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
