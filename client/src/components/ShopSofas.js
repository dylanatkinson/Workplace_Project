import React from 'react';

import FabricSofa from './images/cat-fabric-tallulah_thriqd.jpg';
import LeatherSofa from './images/shopsofas-cricket.jpg.jpg';
import CornerSofa from './images/cat-corner-clerkenwell_gfa0h1.jpg';
import ReclinerSofa from './images/cat-recliner-tollouse_syuqhn.jpg';
import Sofabed from './images/sofa-beds_yt5myi.jpg';

const ShopSofas = () => {
    return (
        <>
            <h1 className="shop_sofas-header">Shop Sofas</h1>
            <div className="shop_sofas-slideable">
                <div>
                    <h3>Fabric Sofas</h3>
                    <img src={FabricSofa} alt="Shop Fabric Sofas" />
                </div>
                <div>
                    <h3>Leather Sofas</h3>
                    <img src={LeatherSofa} alt="Shop Leather Sofas" />
                </div>
                <div>
                    <h3>Corner Sofas</h3>
                    <img src={CornerSofa} alt="Shop Corner Sofas" />
                </div>
                <div>
                    <h3>Recliner Sofas</h3>
                    <img src={ReclinerSofa} alt="Shop Recliner Sofas" />
                </div>
                <div>
                    <h3>Sofabeds</h3>
                    <img src={Sofabed} alt="Shop Sofabeds" />
                </div>
            </div>
        </>
    );
};

export default ShopSofas;