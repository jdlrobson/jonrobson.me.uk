import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import { SITE_DESCRIPTION, SITE_THUMB, SITE_TITLE } from './../const'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={SITE_TITLE}
      meta={[
        { name: 'description', content: SITE_DESCRIPTION },
        { name: 'og:description', content: SITE_DESCRIPTION },
        { name: 'keywords', content: 'sample, something' },
        { name: 'og:image', content: SITE_THUMB }
      ]}
    />
    <Header className="container" />
    <div className="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
