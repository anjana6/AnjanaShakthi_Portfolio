import React, { FC } from 'react';
import {Image} from 'antd';
import HeaderTitle from '../src/components/common/HeaderTitle'
import DetailsCard from '../src/components/about/DetailsCard';

const About:FC = () :JSX.Element => {
    return (
        <div className='h-screen'>
            <HeaderTitle title="ABOUT ME"/>
            <div className='grid grid-cols-3' >
                <div className='col-span-3 lg:col-span-1 flex items-center justify-center'>
                    <Image alt='profile' width={300} preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                </div>
                <div className='col-span-3 lg:col-span-2 flex items-center'>
                    <DetailsCard/>
                </div>
            </div>
        </div>
    )
}

export default About
