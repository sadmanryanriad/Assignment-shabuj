/* eslint-disable react/prop-types */
const GalleryCard = ({ img, name, description }) => {
    return (
        <div className="relative overflow-hidden border p-2 h-[370px] w-[175px] rounded-xl bg-[#3773FF] mb-12 transition-all duration-300 hover:w-[350px] group">
            <img className="h-full w-full object-cover bg-cover bg-center rounded-xl filter grayscale" src={img} alt="gallery image" />
            <div className="absolute bottom-0 left-0 w-full p-2 rounded-b-lg bg-gradient-to-r from-green-400 to-blue-500 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default GalleryCard;
