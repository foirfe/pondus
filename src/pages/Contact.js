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
      <EmailForm />
    </div>
  );
}
