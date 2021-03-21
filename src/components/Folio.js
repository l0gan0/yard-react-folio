import React from 'react';
import Tilty from 'react-tilty';

const Folio = ({items}) => {
  
    return ( 
    
        <div className="section-center">
            { items.map((folioItem) => {

                const { id, title, subtitle, subcat, img, desc, pageref } = folioItem;
                
                return ( 

                    <article key={ id } className="folio-item">
                    <Tilty axis="x" scale={1.05} perspective={1000} reset={true} max={15} speed={500}>
                        <div className="folio-img-wrapper">
                            <img src={ img } alt={ title } className="folio-img" />
                        </div>
                        <header className="folio-title">
                                <h3 className="folio-title-text">{ title }</h3>  
                            </header>
                            
                            <div className="item-info">
                                <h4>{ subtitle }</h4>
                                <ul> 
                                    { subcat }
                                </ul>
                            </div>
                            <div className="description">
                                <p>{ desc }</p>
                            </div>
                            <div className="additional-details">
                                { pageref }
                            </div>
                            </Tilty>
                    </article>
                    
                );
            })}
        </div>
    );
};

export default Folio;
