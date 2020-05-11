import React from 'react'
import { FlatList, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { isNil } from 'lodash'
import { generateHandleOnPress } from './CategoryList.utils'
import styles from './CategoryList.style'
import CategoryRow from '../../components/categoryRow'
import NavigationButton from '../../components/navigationButton'
import { generateGoToRoute, generateBack } from '../../helpers/navigation'
import { buttons } from '../../config/translations'

function CategoryList ({ categoryList, description, lang, navigation, title }) {
  const [selectedCategory, setSelectedCategory] = React.useState({})

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => {
          return <CategoryRow
            icon={item.icon}
            label={item.label}
            onPress={() => setSelectedCategory(item)}
            selected={item.id === selectedCategory.id}
          />
        }}
        keyExtractor={({ id }) => id}
      />
      <View style={styles.bottomNavigation}>
        <NavigationButton
          label={buttons.BACK[lang]}
          secondary
          onPress={generateBack({ navigation })}
        />
        <NavigationButton
          label={buttons.NEXT[lang]}
          disabled={isNil(selectedCategory.id)}
          onPress={generateHandleOnPress({ generateGoToRoute, navigation, selectedCategory })}
        />
      </View>
    </View>
  )
}

CategoryList.propTypes = {
  categoryList: PropTypes.array,
  description: PropTypes.string,
  lang: PropTypes.string,
  navigation: PropTypes.object,
  title: PropTypes.string
}

CategoryList.defaultProps = {
  description: '',
  title: 'Category'
}

export default CategoryList
