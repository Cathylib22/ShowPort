export default function HeroRight({ data }) {
  const { measurements, contact } = data;

  return (
    <div className="heroRight">
      <div className="bio">
        <div className="bioLine">
          <span>Height:</span> {measurements.height}
        </div>
        <div className="bioLine">
          <span>Bust:</span> {measurements.bust}
        </div>
        <div className="bioLine">
          <span>Waist:</span> {measurements.waist}
        </div>
        <div className="bioLine">
          <span>Hips:</span> {measurements.hips}
        </div>
        <div className="bioLine">
          <span>Shoes:</span> {measurements.shoes}
        </div>
      </div>

      <div className="contact">
        <div className="contactTitle">Email :</div>
        <a className="contactLink" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <a
          className="contactLink"
          href={`tel:${contact.phone.replace(/\D/g, "")}`}
        >
          {contact.phone}
        </a>
      </div>
    </div>
  );
}
