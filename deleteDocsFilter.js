import {SanityClient} from '../lib/sanity'

SanityClient
  .delete({query: '*[_type == "projects"][4]'})
  .then(console.log('done'))
  .catch(console.error)