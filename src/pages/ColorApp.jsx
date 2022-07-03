import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColorList } from "../cmps/ColorApp/ColorList";
import { loadColors } from "../store/color.actions";

export function ColorApp() {

   const dispatch = useDispatch()
   const { colors } = useSelector(state => state.colorModule)

   useEffect(() => {
      dispatch(loadColors())
   }, [])

   return <main className="color-app">
      <section className="instructions main-layout">
         <p>Hey color hunter, click on your favorite color to vote.</p>
      </section>
      <div className="main-layout">

         <section>
            <ColorList colors={colors} />
         </section>
      </div>
   </main>
}