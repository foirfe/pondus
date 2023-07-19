import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Towns from "../towns.json";
import TownSign from "../img/by-skilt.png";

export default function Town() {
  const params = useParams();
  const townSlug = params.slug;
  const [selectedTown, setSelectedTown] = useState({});

  useEffect(() => {
    function getTown() {
      const filterTown = Towns.filter((item) => townSlug.includes(item.slug));
      setSelectedTown(filterTown[0]);
    }
    getTown();
  }, [townSlug]);
  console.log(selectedTown);

  const headTitle = selectedTown.name + " | Pondus - Puds og polering";

  return (
    <div className="town-page">
      {/*HEAD*/}
      <Helmet>
        <title>{headTitle}</title>
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
      <div className="town-header">
        <h1>{selectedTown.name}</h1>
        <img src={TownSign} alt={selectedTown.name} />
      </div>
    </div>
  );
}
