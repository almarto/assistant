import vercel from 'brisa-adapter-vercel';
import brisaPandaCSS from "brisa-pandacss";

export default {
  output: 'node', // or 'static'
  outputAdapter: vercel({
    regions: ['cdg1']
  }),
  integrations: [brisaPandaCSS()],
};