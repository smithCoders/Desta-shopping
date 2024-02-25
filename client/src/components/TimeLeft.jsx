import { useState, useEffect } from "react";

function TimeLeft() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-02-27") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
     const [expired, setExpired] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
           const newTimeLeft = calculateTimeLeft();
           setTimeLeft(newTimeLeft);
            if (Object.keys(newTimeLeft).length === 0) {
                setExpired(true);
            }

        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className={`w-[285px] h-[240px] flex flex-col items-center mt-[64px] ${expired ? 'text-red-500' : ''} `}>
            <div className="flex flex-col">
            
                <p className="text-gray-500 text-center text-2xl capitalize mb-6">time left</p>
                <div className="flex gap-1">
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">{timeLeft.days}</p>
                        <p className="text-center">Days</p>
                    </div>
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">{timeLeft.hours}</p>
                        <p className="text-center">hours</p>
                    </div>
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">{timeLeft.minutes}</p>
                        <p className="text-center">Mins</p>
                    </div>
                    <div className="w-[45px] h-[50px] bg-gray-700 text-white rounded-sm">
                        <p className="text-center">{timeLeft.seconds}</p>
                        <p className="text-center">sec</p>
                    </div>
                </div>
                {expired && <p className="text-red-500 text-lg mt-4">Time's Up!</p>}
            </div>
        </div>
    );
}

export default TimeLeft;
