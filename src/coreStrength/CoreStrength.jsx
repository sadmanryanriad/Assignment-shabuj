import strengthImage from '../assets/strength1.png';
import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';
import vector3 from '../assets/vector3.png';
import vector4 from '../assets/vector4.png';
import vector5 from '../assets/vector5.png';
import vector6 from '../assets/vector6.png';

const CoreStrength = () => {
  return (
<div className='min-h-[100vh]'>
<div className="bg-[#EBEBEB] max-w-6xl mx-auto rounded-[64px] lg:mt-36 mt-7 lg:mb-36 mb-7 relative lg:z-20">
      <div className="section-bg-overlay"></div>
      <div className="flex flex-col lg:block">
        <div className="lg:absolute lg:-top-24 lg:-z-40 order-2">
          <img src={strengthImage} alt="strength" />
        </div>
        <h2 className="text-7xl py-32 text-right pr-16 order-1">
          Our Core Strength
        </h2>
      </div>
      <div>
        <div className="flex justify-around flex-wrap gap-10 pb-12 pl-5 pr-5 bg-black rounded-b-[64px] opacity-45">
          <div className="text-center">
            <img className="mx-auto" src={vector1} alt="icon" />
            <h2 className="text-5xl text-white">
              <span>16</span>
            </h2>
            <p className=" text-white">Global Offices</p>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={vector2} alt="icon" />
            <h2 className="text-5xl text-white">
              <span>100</span>+
            </h2>
            <p className=" text-white">UK Education Fair</p>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={vector3} alt="icon" />
            <h2 className="text-5xl text-white">
              <span>50,000</span>+
            </h2>
            <p className=" text-white">Courses Offered</p>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={vector4} alt="icon" />
            <h2 className="text-5xl text-white">
              <span>350</span>+
            </h2>
            <p className=" text-white">Global Counsellors</p>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={vector5} alt="icon" />
            <h2 className="text-5xl text-white">
              <span>150</span>+
            </h2>
            <p className=" text-white">Recruiting University</p>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={vector6} alt="icon" />
            <h2 className="text-5xl text-white">
              <span>5,000</span>+
            </h2>
            <p className=" text-white">Student Served</p>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default CoreStrength;
