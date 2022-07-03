import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

export function Alert() {
   let { message } = useSelector(state => state.systemModule)
   const [isOpen, setIsOpen] = useState(false)

   let timeoutId = useRef('')
   let isFirstRender = useRef(true)

   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = false
         return
      }

      if (timeoutId.current) clearTimeout(timeoutId.current)
      setIsOpen(true)

      timeoutId.current = setTimeout(() => {
         setIsOpen(false)
      }, 9000)
   }, [message])

   const onCloseAlert = () => {
      clearTimeout(timeoutId.current)
      setIsOpen(false)
   }


   if (isOpen && message.type) {
      return <div className={`${message.type} alert`}>
         <div>
            <p>{message.txt}</p>
            <button onClick={onCloseAlert}>&times;</button>
         </div>
      </div >
   }

   return <></>
}