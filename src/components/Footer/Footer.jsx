import "./Footer.scss";
import React from "react";
import {IconLocation, IconWhatsapp, IconInstagram} from '../../images/Icons'
import VariantLogo from '../../images/VariantLogo'

const contactData = [
  {
    title: "Plaza Andenes local A-211",
    description: "Avenida Universidad 1250-nte, Col. Los Villarreal, 66447 San Nicolás de los Garza, N.L.",
    icon: 'location'
  },
  {
    title: "Whatsapp",
    description: "8131346173",
    icon: 'whatsapp'
  },
  {
    title: "barberiadomino",
    description: "",
    icon: 'instagram'
  },
]

const Footer = () => {
  return (
    <section id="footer" className="text-center">
      <div>
        {
          contactData.map( (item, index) => 
            <div className="contact-item" key={index}>
              <div className="icon">
                <div>
                  { [<IconLocation/>,<IconWhatsapp/>,<IconInstagram/>][index] }
                </div>
              </div>
              <div>
                <div className="title">{ item.title }</div>
                <div>{ item.description }</div>
              </div>
            </div>
          )
        }

      </div>
      <div><VariantLogo/></div>
    </section>
  );
}

export default Footer;