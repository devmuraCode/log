import { Advantages } from "@/components/Advantages/Advantages";
import Header from "./sections/Header/Header";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import { SectionFive } from "./sections/SectionFive/SectionFive";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";

export default function TransportationFromChina() {
	return (
		<div>
			<Header />
			<SectionOne />
			<SectionTwo />
            <SectionThree/>
			<SectionFor />
			<Advantages/>
			<SectionFive/>
			<ReviewSection/>
		</div>
	);
}
