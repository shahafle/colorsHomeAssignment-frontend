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

   return <main className="color-app main-layout">
      <div>
         <ColorList colors={colors} />
      </div>
   </main>
}