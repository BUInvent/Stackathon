/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Stars from './Stars'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Stars', () => {
  let starsTest
  const stars = 5

  beforeEach(() => {
    starsTest = shallow(<Stars stars={stars} />)
  })

  it('renders the provided number of stars "★" inside div element with a space on either side of each star', () => {
    expect(starsTest.find('div').text()).to.be.equal('★ ★ ★ ★ ★')
  })
})
