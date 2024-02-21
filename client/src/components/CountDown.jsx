import { useEffect, useState } from "react";

function CountDown() {
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Store the timestamp when the countdown started
        localStorage.setItem("countdownStartTime", JSON.stringify(new Date().getTime()));

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const storedStartTime = localStorage.getItem("countdownStartTime");
        if (storedStartTime) {
            const startTime = JSON.parse(storedStartTime);
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;
            const initialTimeLeft = calculateTimeLeft();
            let remainingTime = +new Date("2024-02-27") - startTime - elapsedTime;

            if (remainingTime > 0) {
                const timer = setTimeout(() => {
                    setTimeLeft(calculateTimeLeft());
                }, 1000 - (elapsedTime % 1000));

                return () => clearTimeout(timer);
            } else {
                setTimeLeft(initialTimeLeft);
            }
        }
    }, [timeLeft]); // Added timeLeft dependency here

    const timerComponent = Object.keys(timeLeft).map((interval, index) => {
        if (!timeLeft[interval]) {
            return null;
        }
        return (
            <span className="text-lg md:text-2xl lg:text-3xl text-cyan-600 font-bold mr-4" key={index}>
                {timeLeft[interval]} {interval} {" "}
            </span>
        );
    });

    return (
        <div className="text-center py-8 bg-gray-100">
            <div className="flex justify-center items-center">
                {Object.keys(timeLeft).length ? (
                    timerComponent
                ) : (
                    <span className="text-red-500 text-2xl md:text-3xl lg:text-4xl font-bold">Time's Up!</span>
                )}
            </div>
        </div>
    );
}

export default CountDown;
