import React from 'react'
import PromotionAninmation from './Animation'
import Enroll from './Enroll'


const Promotion = () => {
    return (
        <div className='promotion_wrapper' style={{ background: '#ffffff'}}>
            <div className="container">
                <PromotionAninmation />
                <Enroll />
            </div>
            
        </div>
    )
}

export default Promotion
