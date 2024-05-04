import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const testimonials = () => {

    const slider=useRef();
    let tx=0;

    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Samkit Samsukha</h3>
                                <span>RVCE, Banglore</span>
                            </div>
                        </div>
                        <p>"My experience at RV College of Engineering has been incredibly enriching. The faculty members are knowledgeable and supportive, and the curriculum is designed to provide a well-rounded education. I've had the opportunity to participate in various extracurricular activities, which have helped me develop essential skills and build lifelong friendships. I highly recommend [University Name] to any aspiring student looking for a vibrant learning environment."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Atharva Aggarwal</h3>
                                <span>RVCE, Banglore</span>
                            </div>
                        </div>
                        <p>"Unfortunately, my experience at RV College of Engineering fell short of expectations. The academic resources were limited, and the faculty seemed disengaged at times. I also encountered challenges with course scheduling and administrative processes. The campus environment lacked a sense of community, making it difficult to feel fully engaged. I hope RV College of Engineering takes steps to address these issues for future students."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Varenya Thaker</h3>
                                <span>RVCE, Banglore</span>
                            </div>
                        </div>
                        <p>"My time at RV College of Engineering has had its ups and downs. While some courses were engaging and insightful, others felt a bit disorganized. The campus facilities are generally good, but there's room for improvement in terms of student support services. On the positive side, I've met some fantastic peers and formed valuable connections through extracurricular activities. I believe RV College of Engineering has the potential to excel with some adjustments."</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Sathvik Hegde</h3>
                                <span>RVCE, Banglore</span>
                            </div>
                        </div>
                        <p>"Attending RV College of Engineering has been a transformative experience for me. The rigorous academic programs have challenged me to grow both intellectually and personally. The professors are not only experts in their fields but also passionate about helping students succeed. I've also appreciated the diverse campus community and the opportunities for cultural exchange. Overall, I feel well-prepared for my future career thanks to RV College of Engineering."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default testimonials;
