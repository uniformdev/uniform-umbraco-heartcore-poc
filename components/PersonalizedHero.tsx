import { Personalize } from '@uniformdev/optimize-tracker-react';
import { Hero, HeroFields } from "./hero";

export const PersonalizedHeroLoading = () => {
  return <h1>Loading......</h1>
}

export const PersonalizedHero = ( {item}: {item: HeroFields[]} ) => {
  return (
    <Personalize variations={item} component={Hero}/>
  )
}