import { Helmet } from "react-helmet";
import placeholder from "../img/placeholdergif.gif";

export default function Home() {
  return (
    <div className="index-page">
      {/*HEAD*/}
      <Helmet>
        <title>Pondus | Puds og Polering</title>
        <meta
          name="description"
          content="Pondus - Din pålidelige vinduespudser i Aarhus og omegn. Vi leverer professionel vinduespudsning til både private og erhvervskunder. Få klare og skinnende vinduer i topkvalitet. Kontakt os i dag for et uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="vinduespudser Aarhus, vinduespudsning omegn, professionel vinduespudsning, pålidelig vinduespudser, klare vinduer, skinnende vinduer, vinduespudsning privat, vinduespudsning erhverv, vinduespolering Aarhus, vinduespudser tilbud"
        />
      </Helmet>
      {/*Body*/}
      <h1>Pondus - Puds og Polering</h1>
      <img src={placeholder} alt="placeholder" className="placeholder-gif" />
    </div>
  );
}
