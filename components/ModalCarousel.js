<Carousel
data={data}
renderItem={isTinder ? this._renderLightItem : this._renderItem}
sliderWidth={sliderWidth}
itemWidth={itemWidth}
containerCustomStyle={styles.slider}
contentContainerCustomStyle={styles.sliderContentContainer}
layout={type}
loop={true}
/>