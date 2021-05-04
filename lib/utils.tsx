import { IntentTags } from '@uniformdev/optimize-common';

interface intentJson
{
  contentTypeAlias: string,
  unfrmOptIntentTag: string, 
  unfrmOptIntentTagStrenght: string
}

export function mapIntentJsonToIntentTag(intenttag){
    const intentTag = {} as IntentTags
    const intentdata = intenttag[0] as intentJson //Assume for this PoC that there is always data in the first array item
    
  if(intentdata.unfrmOptIntentTag){
    intentTag.intents = {
      [intentdata.unfrmOptIntentTag]: {
        str: intentdata.unfrmOptIntentTagStrenght
      }
    }
  }
  
  return intentTag as IntentTags
}