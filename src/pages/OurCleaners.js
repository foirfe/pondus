import { Helmet } from "react-helmet";
import HeaderBanner from "../img/marcus-1.png";
import marcus2 from "../img/marcus-2.jpg";

export default function OurCleaners() {
  return (
    <div className="our-cleaners-page">
      {/*HEAD*/}
      <Helmet>
        <title>Hvem er Pondus? | Pondus - Puds og polering</title>
      </Helmet>
      <div
        className="header-banner"
        style={{ backgroundImage: `url(${HeaderBanner})` }}
      >
        <h1>Hvem er Pondus?</h1>
      </div>
      <div className="content-box-left">
        <div className="text">
          <h2>Pondus er en lille virksomhed, med store visioner</h2>
          <p>
            Pondus er ikke bare et ord for os! Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla efficitur, purus nec pharetra
            tincidunt, ante tellus pharetra elit, id tincidunt felis ante et
            massa. Quisque id tellus
          </p>
        </div>
        <img src={marcus2} alt="Marcus" />
      </div>
      <div className="content-box-right">
        <img src={marcus2} alt="Marcus" />
        <div className="text">
          <h2>Hvorfor Pondus?</h2>
          <p>
            Når du støtter Pondus -Puds og Polering, støtter du ikke kun det
            lokale miljø, men også gode arbejdsforhold.
          </p>
        </div>
      </div>
    </div>
  );
}
