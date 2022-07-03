import { ProgressBar } from "../ProgressBar";
import { useDispatch } from 'react-redux'
import { addVote } from "../../store/color.actions";

export function ColorPreview({ color }) {

   const dispatch = useDispatch()
   const onVote = () => {
      dispatch(addVote(color.id))
   }

   return <div className="color-preview" style={{ backgroundColor: color.hex }} onClick={onVote}>
      <div className="preview-footer">
         <p>{color.name}</p>
         <ProgressBar votes={color.votes} />
      </div>
   </div>
}