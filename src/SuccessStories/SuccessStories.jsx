import SuccessSlides from './SuccessSlides';

const SuccessStories = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-7 md:px-0 md:py-24 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900'>
            <div className='md:col-span-1'>
            <h1 className="text-6xl leading-[5rem] font-bold capitalize text-[#36E8E1] md:pl-28 md:pr-10 md:pt-24">Become a part of Our Success Stories</h1>
            </div>
            <div className='md:col-span-2'><SuccessSlides></SuccessSlides></div>
        </div>
    );
};

export default SuccessStories;