import { ProgressBar } from "../ProgressBar";

export function ColorPreview({ color }) {
   return <div className="color-preview" style={{ backgroundColor: color.hex }}>
      <p>{color.name}</p>
      <ProgressBar votes={color.votes} />
   </div>
}