import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

export function ProgressBar({ votes = 0 }) {

   const [maxVotes, setMaxVotes] = useState(0)
   const { colors } = useSelector(state => state.colorModule)

   useEffect(() => {
      const max = Math.max(...colors.map(color => color.votes))
      setMaxVotes(max)
   }, [colors])


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