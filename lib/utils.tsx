import { IntentTags } from '@uniformdev/optimize-common';

export function translateIntentTag(intenttag){
    var returnvalx
    //var returnvaly
    
  if(intenttag.unfrmOptIntentTag){
    returnvalx=
    {
          intents: {
            [intenttag.unfrmOptIntentTag]: {
              str: intenttag.unfrmOptIntentTagStrenght
            }
          },

  }
}
  else
    {
      returnvalx=
      {
  
      }
    }

    return returnvalx as IntentTags
  }