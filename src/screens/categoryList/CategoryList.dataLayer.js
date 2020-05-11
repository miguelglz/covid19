import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import { generateCategoryArray } from './CategoryList.utils'
import { titles } from '../../config/translations'

export function CategoryListDataLayer ({ route: { params: { categoryMap, description, title } }, lang, navigation }) {
  const formattedCategoryList = generateCategoryArray({ categoryMap, lang }).sort(
    (a, b) => a.order > b.order ? 1 : -1
  )

  return <CategoryList
    categoryList={formattedCategoryList}
    description={description ? description[lang] : null}
    navigation={navigation}
    title={title ? title[lang] : titles.CATEGORY[lang]}
    lang={lang}
  />
}

const mapStateToProps = ({ preferences: { selectedLang } }) => ({ lang: selectedLang })

CategoryListDataLayer.propTypes = {
  route: PropTypes.object,
  lang: PropTypes.string,
  navigation: PropTypes.object
}

export default connect(mapStateToProps)(CategoryListDataLayer)
