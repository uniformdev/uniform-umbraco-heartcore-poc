import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react";
import { GetStaticProps } from "next";
import React from "react";
import Hero from "../components/hero";
import MyClient from "../lib/HearthCoreClient"
import { translateIntentTag } from "../lib/utils";

export default function marketer(props){

    useBehaviorTracking(props.intentTag);

    return (
        <Hero {...props} />
    )
}
export const getStaticProps: GetStaticProps = async (context) => {
    const page = await MyClient.delivery.content.byUrl('/home/marketer')
    const intent = translateIntentTag(page)
  
    return {
      props: {
        headline: page.heroTitle,
        heroSubtitle: page.heroSubtitle,
         intentTag: intent
      }
    }
}