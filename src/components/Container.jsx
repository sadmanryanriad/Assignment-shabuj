/* eslint-disable react/prop-types */
const Container = ({children}) => {
    return (
        <div className="max-w-screen-md m-auto">
            {children}
        </div>
    );
};
export default Container;