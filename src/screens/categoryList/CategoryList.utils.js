import { Linking } from 'react-native'
import { isNil } from 'lodash'

export function generateCategoryArray ({ categoryMap, lang }) {
  const categoryArr = []

  for (let [key, categoryData] of Object.entries(categoryMap)) {
    categoryArr.push({
      id: key,
      label: categoryData.name[lang],
      ...categoryData
    })
  }

  return categoryArr
}

export function generateHandleOnPress ({ generateGoToRoute, navigation, selectedCategory }) {
  const { subcategories, url } = selectedCategory
  const goToRouteParams = {
    navigation,
    routeName: !isNil(subcategories) ? 'CategoryList' : 'Eform',
    params: { ...selectedCategory, categoryMap: subcategories },
    stack: !isNil(subcategories)
  }

  if (!isNil(url)) return () => Linking.openURL(url).catch((e) => console.error(e))

  return generateGoToRoute(goToRouteParams)
}
