import vercel from 'brisa-adapter-vercel';

export default {
  output: 'node', // or 'static'
  outputAdapter: vercel({
    regions: ['cdg1']
  })
};