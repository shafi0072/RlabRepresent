import React from 'react';

const Locations = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <form action="">
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="locationId" style={{marginRight:'60px'}}>Location ID</label>
                    <input type="text" id='locationId' placeholder='PlantaLiners'/>
                </div>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="DeviceName" style={{marginRight:'56px'}}>Add Images</label>
                    <input type="text" id='DeviceName' placeholder='ABC012319'/>
                </div>
                
                <button className="btn btn-primary" style={{marginLeft:'65%'}}>Create/Save</button>
                <div className="d-flex justiy-content-around mb-3">
                    <label className="text-light" htmlFor="image" style={{marginRight:'27px'}}>Add Images</label>
                    <input type="file" id='image' placeholder='30.5'/>
                </div>
                <button className="btn btn-primary" style={{marginLeft:'65%'}}>Create/Save</button>
            </form>
            
        </div>
    );
};

export default Locations;