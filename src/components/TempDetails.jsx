import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";




const TempDetails = () => {

    const verticalDetails = [
        {
            id:1,
            icon: <FaThermometerEmpty />,
            title: "Real Feel",
            value: "22°",
        },
        {
            id:2,
            icon: <BiSolidDropletHalf />,
            title: "Humidity",
            value: "346%",
        },
        {
            id:3,
            icon: <FiWind />,
            title: "Wind",
            value: "11km/h",
        },
       
    ];

  

        const horizentalDetails = [
            {
                id:1,
                icon: <GiSunrise />,
                title: "Sunrise",
                value: "05:33 AM",
            },
            {
                id:2,
                icon: <GiSunset />,
                title: "Sunset",
                value: "06:45 PM",
            },
            {
                id:3,
                icon: <MdKeyboardArrowUp />,
                title: "High",
                value: "37°",
            },
            {
                id:4,
                icon: <MdKeyboardArrowDown />,
                title: "Low",
                value: "7°",
            },
        ]
    



  return (
    <div>
      <div className="flex items-center justify-center my-6 text-xl text-cyan-300">
        <p>Rain</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className="w-20"/>

            <p>34°</p>

            <div className="flex flex-col space-y-3 items-start">

                        {
                            verticalDetails.map(({ id, icon, title, value }) => (
                                <div key={id} className="flex font-light text-sm items-center justify-center">
                                {icon}
                                {`${title}:`} <span className="font-medium ml-1">{value} </span>
                                </div>
                            ))
                        }



            
            </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
            {
                horizentalDetails.map(({ id, icon, title, value }) => (
                    <div key={id} className="flex font-light text-sm items-center justify-center">
                    {icon}
                    {`${title}:`} <span className="font-medium ml-1">{value} </span>
                    </div>
                ))
            }

            <div className="flex flex-row items-center"></div>

      </div>



    </div>
  )
}

export default TempDetails
