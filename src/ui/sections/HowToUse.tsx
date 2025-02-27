import '../../styles/sections/HowToUse.css'
import {steps} from "../../data/howToUseData.ts";
import SectionHeader from "../../components/SectionHeader.tsx";

const HowToUse = () => {
    return (
        <>
            <SectionHeader>How To Use</SectionHeader>
            {steps.map((step, index) => (
                <div
                    className="step-card"
                    key={index}
                    test-id={`step-card-${index}`}
                >
                    {step.title}: {step.description}
                </div>
            ))}
        </>
    )
}

export default HowToUse