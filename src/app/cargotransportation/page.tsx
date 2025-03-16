import { Advantages } from "@/components/Advantages/Advantages";
import Header from "./sections/Header/Header";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";
import { SectionFive } from "./sections/SectionFive/SectionFive";
import { ReviewSection } from "../(home)/sections/ReviewSection/ReviewSection";
import { DownDocs } from "../(home)/sections/DownDocs/DownDocs";
import { Section } from "@/components/Section/Section";
import img from '@/assets/home.svg'
export default function TransportationFromChina() {
	return (
		<div>
			<Header />
			<SectionOne />
			<SectionTwo />
            <SectionThree/>
			<DownDocs/>
			<Advantages/>
			<SectionFive/>
			<Section imageSrc={img}/>
		</div>
	);
}
