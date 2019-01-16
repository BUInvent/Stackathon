/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Review from './Review'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Review', () => {
  let reviewTest
  const review = {
    stars: 4,
    user: {email: 'thing@thing.com'},
    date: '2019-01-15',
    title: 'test',
    text: 'this is a test'
  }

  beforeEach(() => {
    reviewTest = shallow(<Review review={review} />)
  })

  it('renders 2 h6 elements and one p element', () => {
    expect(reviewTest.find('h6')).to.have.lengthOf(2)
    expect(reviewTest.find('p')).to.have.lengthOf(1)
  })
})
