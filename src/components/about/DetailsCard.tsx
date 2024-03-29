import React, { FC } from 'react';

const DetailsCard: FC = () :JSX.Element => {
    return (
        <div>
            <p className='font3xl'>My Name is Anjana Shakthi</p>
            <p className='fontlg'>
                I&lsquo; m graduate software engineer from the University of Kelaniya Sri Lanka. I have a 2+ years of extensive experience in Software Development as a software engineer.
                I see myself as a full-stack web developer Mostly Specialized in JavaScript & TypeScript.My greatest passion in life is 
                to do a better service for the industry and also the society.
            </p>
            <div className='fontxl mb-5'>
                <div className='grid grid-cols-4 my-3'>
                    <div className='col-span-1 '>Full Name</div>
                    <div className='col-span-3'>: Jayasinghe Arachchige Anjana Shakthi</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Address</div>
                    <div className='col-span-3'>: 66/A, Rubberhena, Puwakwatta, Kamburugamuwa, Matara.</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>BirthDay</div>
                    <div className='col-span-3'>: 18th of October, 1995</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Nationality</div>
                    <div className='col-span-3'>: Sri Lanka</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Language</div>
                    <div className='col-span-3'>: Sinhala, English</div>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <div>Career Goal</div>
                    <div className='col-span-3'>: Senior Architect</div>
                </div>
            </div>
            {/* <Button icon={<DownloadOutlined />} size='large' type="primary" style={{ background: "rgba(16, 185, 129)"}}>
                Download CV
            </Button> */}
        </div>
    )
}

export default DetailsCard
