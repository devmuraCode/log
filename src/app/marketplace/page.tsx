import { Advantages } from "@/components/Advantages/Advantages";
import Header from "./sections/Header/Header";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";

export default function Marketplace() {
	return (
		<div>
			<Header />
			<SectionOne />
			<SectionTwo />
			<Advantages />
			<SectionThree />
			<ReviewSection/>
		</div>
	);
}
