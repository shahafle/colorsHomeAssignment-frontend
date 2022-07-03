import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ColorList } from "../cmps/ColorApp/ColorList";
import { socketService } from "../services/socket.service";
import { loadColors, updateColor } from "../store/color.actions";
import { showMsg } from "../store/system.actions";

export function ColorApp() {

   const dispatch = useDispatch()
   const { colors } = useSelector(state => state.colorModule)

   useEffect(() => {
      dispatch(loadColors())

      socketService.on('vote added', alertaddedVote)

      return () => {
         socketService.off('vote added', alertaddedVote)
      }
   }, [])

   const alertaddedVote = (color) => {
      dispatch(updateColor(color))
      dispatch(showMsg('success', `new vote added for ${color.name}`))
   }

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