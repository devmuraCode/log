import { Advantages } from '@/components/Advantages/Advantages'
import { CargoSection } from './sections/CargoSection/CargoSection'
import { DownDocs } from './sections/DownDocs/DownDocs'
import { Header } from './sections/Header/Header'
import { LegasySection } from './sections/LegasySection/LegasySection'
import { MainSection } from './sections/MainSection/MainSection'
import { TypesTransportationSection } from './sections/TypesTransportationSection/TypesTransportationSection'
import { ReviewSection } from './sections/ReviewSection/ReviewSection'
import { Section } from '@/components/Section/Section'
import img from '@/assets/home.svg'

export default function Page() {
  return (
    <div>
      <Header/>
      <MainSection/>
      <DownDocs/>
      <CargoSection/>
      <LegasySection/>
      <Advantages/>
      <TypesTransportationSection/>
      {/* <ReviewSection/> */}
      <Section imageSrc={img}/>
    </div>
  )
}
