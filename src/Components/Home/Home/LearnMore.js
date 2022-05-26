import React from 'react';
import RAM from '../../../images/RAM.jpg';
import HDD from '../../../images/HDD.jpg';
import DISPLAY from '../../../images/DISPLSY.jpg';

const LearnMore = () => {
    return (
        <div>
            <h1 className='text test-xl'> Detailed description</h1>
            
            <div class="flex flex-col w-full lg:flex-row">
                <div class="card w-96 glass">
                    <figure><img src={RAM} alt='rode' ></img></figure>
                    <div class="card-body">
                        <h2 class="card-title">RAM</h2>
                        <p>Random-access memory is a form of computer memory that can be read and changed in any order..........</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary"><a target='_blank' href='https://en.wikipedia.org/wiki/Random-access_memory' >Learn More!</a></button>
                        </div>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="card w-96 glass">
                    <figure><img src={HDD} alt='rode' ></img></figure>
                    <div class="card-body">
                        <h2 class="card-title">Display</h2>
                        <p>Various computer display standards or display modes have been used in the history of the personal computer.......</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a target='_blank' href='https://en.wikipedia.org/wiki/Computer_display_standard' >Learn More!</a></button>
                        </div>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="card w-96 glass">
                    <figure><img src={DISPLAY} alt='rode' ></img></figure>
                    <div class="card-body">
                        <h2 class="card-title">HDD</h2>
                        <p>A hard disk drive (HDD), hard disk, hard drive, or fixed disk.......</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a target='_blank' href='https://en.wikipedia.org/wiki/Hard_disk_drive' >Learn More!</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;