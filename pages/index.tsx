import {Home} from "../components/home"
import PageFooter from "../components/footer"
import {PersonalizedHero} from "../components/PersonalizedHero"
import { GetStaticProps } from "next"
import MyClient from "../lib/HearthCoreClient"
import { HeroFields } from "../components/hero"
import { mapIntentJsonToIntentTag } from "../lib/utils";


export default function index(props) {
    return (    
      <>
        <PersonalizedHero item={props.heroFieldsList}  />
        <Home />
        <PageFooter />
      </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const frontPage = await MyClient.delivery.content.byId('d9a1929d-8fbd-4195-9724-226ad23203b8')
    const variant = frontPage.heroVariants as any[];

  const heroFieldsListToPersonalize = variant.map<HeroFields>(child => 
      (
         {
           headline: child.heroTitle,
           heroSubtitle: child.heroSubtitle,
           intentTag: mapIntentJsonToIntentTag(child.personalization),
         }
      )
    )

    return {
    props: {
      heroFieldsList: heroFieldsListToPersonalize
    }
  }
}