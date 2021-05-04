import { IntentTags } from '@uniformdev/optimize-common'
import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react";

export interface HeroFields {
        headline: string;
        heroSubtitle: string;
        type?: string | null;
        intentTag: IntentTags | undefined | null;
}

    export const Hero = ({headline, heroSubtitle, intentTag}:HeroFields) => {
        useBehaviorTracking(intentTag);

        return (
            <>
            <div>
                <h1 className="title">{headline}</h1>
            </div>
            <p className="description">
                {heroSubtitle}
            </p>
            </>
        )}

        export default Hero