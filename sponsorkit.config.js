import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  github: {
    login: 'williamthome',
    type: 'user',
  },

  outputDir: './dist',
  formats: ['svg', 'png'],
  width: 800,
  renderer: 'tiers',

  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: 'Supporters',
      preset: tierPresets.base,
    },
    {
      title: 'Backers',
      monthlyDollars: 25,
      preset: tierPresets.medium,
    },
    {
      title: 'Champions',
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: 'Production Sponsors',
      monthlyDollars: 250,
      preset: tierPresets.xl,
    },
  ],

  renders: [
    {
      name: 'sponsors',
      formats: ['svg'],
    },
    {
      name: 'sponsors-circles',
      renderer: 'circles',
      formats: ['svg'],
    },
  ],
})
