import '../../styles/sections/HowItWorks.css'
import {manual} from "../../data/howItWorksData.ts";
import SectionHeader from "../../components/SectionHeader.tsx";

const HowItWorks = () => {
    return (
        <>
            <SectionHeader>How It Works</SectionHeader>
            {manual.map((m, index) => (
                <div
                    className="manual-card"
                    key={index}
                    test-id={`manual-card-${index}`}
                >
                    {m.description}
                </div>
            ))}
        </>

    )
}

export default HowItWorks