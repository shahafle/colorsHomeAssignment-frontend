import { Link } from "react-router-dom";

export function About() {
   return <main className="main-layout">
      <div className="about">
         <h2>Abou us</h2>
         <p>Color Mania is a colorful community which trying to achieve the most loved color in the web.</p>
         <p>Join the survey and vote!</p>
         <Link to="/">
            Vote Here
         </Link>
      </div>
   </main>
}