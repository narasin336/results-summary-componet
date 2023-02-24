import { useState } from "react";
import data from "./data.json";


export default function App() {

  const [items] = useState(data);

  return (
    <div className="md:flex md:items-center md:justify-center md:h-screen md:max-w-2xl md:mx-auto">
      <section className=" md:flex bg-white shadow rounded-3xl">
      <div className=" bg-div p-8 text-center text-white rounded-b-3xl md:pt-10 md:flex-1 md:rounded-3xl md:flex md:flex-col md:items-center md:justify-center">
        <h3 className="mb-6">Your Result</h3>

        <div className="flex items-center justify-center">
        <p className=" bg-circle w-24 h-24 md:w-40 md:h-40 flex flex-col items-center    justify-center gap-1 rounded-full text-white text-3xl font-bold md:text-6xl">
          76 <p className="text-slate-200 text-base font-normal"> of 100 </p> 
        </p> 
        

        </div>

        <h2 className="my-6 text-white font-bold text-lg md:text-2xl">Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div className="p-8 md:flex-1">
        <h2 className="text-slate-700 mb-6 text-lg font-bold">Summary</h2>

        <div className=" flex flex-col gap-4">
          {items.map((item, index) =>(
            <div 
            key={index} 
            style={{
              backgroundColor: `${item.color}10`,
            }}
            className="flex items-center justify-between p-4  rounded-lg shadow"
            >
              <h3 style={{color: item.color}} className="flex items-center gap-2">
                <img src={item.icon} alt={item.category} />
                {item.category}
              </h3>

              <p className="flex items-center gap-2 text-slate-500">
                <span className=" text-slate-700 font-bold">{item.score}</span> / 100
              </p>

            </div>

          ))}
        </div>

        <button className=" bg-slate-700 py-4 mt-6 rounded-full text-white w-full hover:bg-indigo-600 shadow transition-all duration-200 ">Continue</button>

      </div>
    </section>
    </div>
  )
}
