import Predict from "./sections/Predict.tsx";
import HowToUse from "./sections/HowToUse.tsx";
import Industry from "./sections/Industry.tsx";
import HowItWorks from "./sections/HowItWorks.tsx";
import '../styles/HomePage.css'
import NavBar from "./NavBar.tsx";
import { NavItem } from "../models/ui/NavBar.ts";

const navItems: NavItem[] = [
    { id: "predict", label: "Predict" },
    { id: "industry", label: "Industry" },
    { id: "how-to-use", label: "How to use" },
    { id: "how-it-works", label: "How it works" },
];

const HomePage = () => {
    return (
        <>
            <NavBar navItems={navItems}/>
            <div className="page">
                <section id={"predict"}>
                    <Predict/>
                </section>
                <section id={"industry"}>
                    <Industry/>
                </section>
                <section id={"how-to-use"}>
                    <HowToUse/>
                </section>
                <section id={"how-it-works"}>
                    <HowItWorks/>
                </section>
            </div>
        </>

    )
}

export default HomePage