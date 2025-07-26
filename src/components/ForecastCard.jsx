import React from 'react'

function ForcastCard({
    day,
    icon,
    high,
    low,
    condition
}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 text-center transition-transform hover:transform hover:scale-105 flex flex-col">
            <h3 className="font-medium text-gray-800">{day}</h3>
            <img className='h-12 w-10 mx-auto mb-1' src={icon} alt="weathericon" />
            <p className="text-sm text-gray-600 mb-2">{condition}</p>
            <div className="flex justify-center gap-3 text-gray-800">
                <span className="font-medium">{high}°</span>
                <span className="text-gray-500">{low}°</span>
            </div>
        </div>

    )
}

export default ForcastCard;




