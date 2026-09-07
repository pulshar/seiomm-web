import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
    value: number;
    prefix?: string;
    suffix?: string;
    onComplete?: () => void;
}

export function AnimatedNumber({
    value,
    prefix = "",
    suffix = "",
    onComplete,
}: AnimatedNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
    });

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration: 1.5,
            ease: [0.05, 1, 0.15, 1],
            onUpdate: (v) => setDisplayValue(Math.round(v)),
            onComplete,
        });

        return () => controls.stop();
    }, [isInView, value, onComplete]);

    return (
        <span ref={ref}>
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
}