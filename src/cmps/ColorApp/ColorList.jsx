import { ColorPreview } from "./ColorPreview";

export function ColorList({ colors }) {
   return <section className="color-list">
      {colors.map(color => <ColorPreview key={color.id} color={color} />)}
   </section>
}