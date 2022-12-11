import "./TopHeader.scss";
import React from "react";

import BrandLogo from '../../images/BrandLogo'
import {IconLocation, IconWhatsapp, IconPhone } from '../../images/Icons'
import { Button } from '../../utils/utils';
import config from '../../utils/config'

const TopHeader = () => {
  return (
    <section id="top-header">
      {/* Location button */}
        <div className="header-icon">
          <a href={config.location} target="_blank" rel="noopener noreferrer"> 
            <IconLocation/>
          </a>
        </div>

      {/* Main brand logo */}
      <div className="main-logo">
        <div>
          <BrandLogo/>
        </div>
        <div className="mt-4">
          <a href={config.booking} target="_blank" rel="noopener noreferrer"> 
            <Button title="Agendar cita"></Button>
          </a>
        </div>
        
        <div className="mt-4">
            <div><IconPhone/> {config.phoneNumber}</div>
        </div>

      </div>

      {/* Whatsapp button */}
      <div className="header-icon big">
          <a href={config.whatsapp} target="_blank" rel="noopener noreferrer"> 
            <IconWhatsapp/>
          </a>
        </div>
    </section>
  );
}

export default TopHeader;
