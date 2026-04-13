import { AboutCta } from "./Components/About-Cta";
import { AboutFounders } from "./Components/About-Founders";
import { AboutHero } from "./Components/About-Hero";
import { AboutSpirit } from "./Components/About-Spirit";
import { AboutTimeline } from "./Components/About-Timeline";
import { AboutWorkshop } from "./Components/About-Workshop";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutSpirit />
            <AboutTimeline />
            <AboutWorkshop />
            <AboutFounders />
            <AboutCta />
        </>
    )
}