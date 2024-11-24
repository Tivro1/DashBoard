import Header from "../Components/Header";

import NavVar from "../Nav/NavVar";

// import background from "../assets/background.jpg"
const Root = () => {
    return (
        <>
       

        <div className="flex dark:bg-white flex-row w-full h-auto justify-center pb-7"
    >
        
            <div className="col-span-3 w-[20%] flex items-center justify-center mt-2 fixed -left-3 top-3">
            <NavVar></NavVar>
            </div>
            <div className="col-span-9 bg-transparent w-[70%] mt-2 ">
                    {/* Hearder */}
                    <div className="w-full">
                    <Header></Header>

                    </div>
            </div>
        </div></>
    );
};

export default Root;

// style={{ backgroundImage: `url(${background})` }}