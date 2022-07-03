import { ProgressBar } from "../cmps/ProgressBar";
import { useDispatch } from 'react-redux';
import { showMsg } from "../store/system.actions";


export function About() {

   const dispatch = useDispatch()

   const message = () => {
      dispatch(showMsg('success', 'hello everybody and welcome to my show'))
   }

   return <main className="main-layout about">
      <div>
         about
      </div>
      <button onClick={message}>CliCK</button>
   </main>
}