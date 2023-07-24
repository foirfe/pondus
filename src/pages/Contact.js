import { Helmet } from "react-helmet";
import EmailForm from "../components/EmailForm";

export default function Contact() {
  return (
    <div className="contact-page">
      {/*HEAD*/}
      <Helmet>
        <title> Kom i kontakt | Pondus - Puds og polering</title>
      </Helmet>
      <h1>Kontakt</h1>
      <img
        src="https://as2.ftcdn.net/v2/jpg/01/98/28/87/1000_F_198288777_qi2DWlJwVNoihCT5ElSp6JBas6HNRON7.jpg"
        alt="Background"
        className="background-image"
      />
      <EmailForm />
    </div>
  );
}
