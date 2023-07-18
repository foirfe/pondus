import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="index-page">
      {/*HEAD*/}
      <Helmet>
        <title>Pondus - Puds og Polering</title>
      </Helmet>
      {/*Body*/}
      <h1>Pondus - Puds og Polering</h1>
    </div>
  );
}
