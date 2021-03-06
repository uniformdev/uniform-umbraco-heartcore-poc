import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react";
import { GetStaticProps } from "next";
import React from "react";
import Hero, { HeroFields } from "../components/hero";
import MyClient from "../lib/HearthCoreClient"
import { mapIntentJsonToIntentTag } from "../lib/utils";

export default function developer(props){
    return (
        <Hero {...props} />
    )
}
export const getStaticProps: GetStaticProps<HeroFields> = async (context) => {
    const page = await MyClient.delivery.content.byUrl('/home/developer')
    const intent = mapIntentJsonToIntentTag(page.personalization)
  
    return {
      props: {
         headline: page.heroTitle,
         heroSubtitle: page.heroSubtitle,
         intentTag: intent
      }
    }
}