import { style } from '@vanilla-extract/css'

import { sprinkles } from '../../nft/css/sprinkles.css'

const baseNavDropdown = style([
  sprinkles({
    background: 'lightGray',
    borderStyle: 'solid',
    borderColor: 'medGray',
    borderWidth: '1px',
    paddingBottom: '8',
    paddingTop: '8',
  }),
  {
    boxShadow: '0px 4px 12px 0px #00000026',
    zIndex: 10,
  },
])

export const NavDropdown = style([
  baseNavDropdown,
  sprinkles({
    position: 'absolute',
    borderRadius: '12',
  }),
  {},
])

export const mobileNavDropdown = style([
  baseNavDropdown,
  sprinkles({
    position: 'fixed',
    borderTopRightRadius: '12',
    borderTopLeftRadius: '12',
    top: 'unset',
    bottom: '56',
    left: '0',
    right: '0',
  }),
])