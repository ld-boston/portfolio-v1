import Cosmic from 'cosmicjs'

const api = Cosmic()
const bucket = api.bucket({
  // slug: process.env.COSMIC_SLUG,
  // read_key: process.env.COSMIC_READ_KEY,
  slug: '0e19b0b0-5ebc-11ec-a285-a5b8b9db1838',
  read_key: 'dO2tokTdgWaXWggZDaupTLyKE80LXkeC2LjRAJByN62PLBbPvg',
})

export { bucket }
