import { DownDocs } from "../(home)/sections/DownDocs/DownDocs";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";


export default function Representative() {
    return (
        <div>
            <SectionOne/>
            <SectionTwo/>
            <DownDocs/>
            <SectionFor/>
            <ReviewSection/>
        </div>
    )
}