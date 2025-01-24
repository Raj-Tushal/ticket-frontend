import Button from "./Button";
import { FaBed } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { IoCarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/Slices/themeSlice'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch()
  const light = useSelector((state) => state.themeReducer.light);
  const { isAuthenticated } = useSelector((state) => state.auth)
  return (
    <>
      <div className="w-full  bg-[#003173] dark:bg-[#1E1E1E] px-20">
        {/* top */}
        <div className="w-full h-16  text-white flex justify-between py-12 items-center">
          <Link to="/">
            <h1 className="text-3xl font-bold">Booking App</h1>
          </Link>
          <div className=" flex gap-4">
            <button className="text-3xl" onClick={() => dispatch(changeTheme())}>{light ? <MdDarkMode /> : <MdOutlineDarkMode />}</button>

            {isAuthenticated ? (<Link to={"/login"}><Button text="Logout" /></Link>)
              : (
                <>
                  <Link to={"/login"}>
                    <Button text="Login" />
                  </Link>
                  <Link to={"/Register"}>
                    <Button text="Register" />
                  </Link>
                </>
              )
            }
          </div>
        </div>

        {/* bottom */}
        <div className="w-full  h-20 gap-12  py-5 flex text-white font-bold">
          <Btn text="Stays" icon={<FaBed />} />
          <Btn text="Flights" icon={<MdOutlineFlight />} />
          <Btn text="Cars" icon={<IoCarSharp />} />
          <Btn text="Hotels" icon={<LiaHotelSolid />} />

        </div>
      </div>
    </>
  );
}

export default Navbar;

function Btn({ text, icon }) {
  return (
    <button className="flex gap-2  items-center border-2 border-white rounded-xl px-2 ">
      {icon}
      {text}
    </button>
  );
}
