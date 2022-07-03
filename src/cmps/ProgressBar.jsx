import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { getMaxVotes } from "../store/color.actions"

export function ProgressBar({ votes = 0 }) {

   const [maxVotes, setMaxVotes] = useState(0)

   const dispatch = useDispatch()

   useEffect(() => {
      loadMaxVotes()
   }, [])

   const loadMaxVotes = async () => {
      const max = await dispatch(getMaxVotes())
      setMaxVotes(max)
   }

   return <div className="progress-bar-wrapper">
      <div className="container">
         <div className="progress-fill" style={{ width: `${votes / maxVotes * 100}%` }}>
            <span>
               {votes}
            </span>
         </div>
      </div>
   </div>
}