import React from 'react';

import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';

const BandeauMediateur = () => (
  <>
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
          <a
              href="https://cget-carto.github.io/France-services/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h3>J’accède aux services publics près de chez moi
              <img className="fs-align"
                src="/images/logo/FS.png"
                alt="France Services"
              /></h3>
            </a>   
        </div>
      </div> 
      <div className="container content-container">
        <div>
          <a
              href="https://www.conseiller-numerique.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>Vous aimez le contact humain, cherchez un métier qui a du sens dans un secteur d’avenir? Rejoignez le mouvement national des conseillers numériques!</p>
              <img
                src="/images/logo/CN.png"
                alt="Conseiller Numérique "
              />
            </a>  
        </div>
      </div>
    </div>


    <style jsx>{`
      .bandeau-mediateur {
        color: #fff;
        background-color: ${constants.colors.blue};
        padding: 30px 0;
        max-height: 350px;
      }
      h3 {
        color: #fff;
        margin-top: 0;
      }
      p {
        color: #fff;
        margin: 0;
        padding: 0;
      }

      .container {
        display: flex;
        align-items: center;
      }
  
      .fs-align{
        vertical-align: middle;
        padding: 10px 20px 0px 20px;
        width: 50px;
      }
  
      .container > div:first-of-type {
        flex-grow: 1;
        margin-right: 10px;
        width: inherit;
      }
      .container > div:last-of-type {
        flex-shrink: 0;
      }

      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .container {
          flex-direction: column;
        }
        .container > div:first-of-type {
          margin-right: 0;
        }

        .container > div:last-of-type {
          margin-top: 20px;
        }
      }
    `}</style>
  </>
);
export default BandeauMediateur;
