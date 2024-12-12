import React from "react";

const working = [
  {
    Image: "/assets/working/card-image1.png",
    title: "Provider Revenue Cycle Services",
  },
  {
    Image: "/assets/working/card-image2.png",
    title: "Payer Administrative Services",
  },
  {
    Image: "/assets/working/card-image3.png",
    title: "Pharma Market Access Services",
  },
  {
    Image: "/assets/working/card-image4.png",
    title: "Clinical Data Services",
  },
  {
    Image: "/assets/working/card-image5.png",
    title: "Healthcare Analytics",
  },
];

const Working = () => {
  return (
    <div className="py-2 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Our Clients & Working Healthcare</h3>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {working.map((sectar, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <img src={sectar.Image} alt="not found" className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{sectar.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
