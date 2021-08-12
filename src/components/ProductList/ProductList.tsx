import React, { useEffect, useRef, useState } from 'react';
import { Flex, View } from 'vcc-ui';

import { Product } from '../../types/product';
import PageIndicator from '../Toolkit/ListPositionIndicator/ListPositionIndicator';
import ProductListItem from './ProductListItem';

interface ProductListProps {
  products: Product[],
}

const getScrollPosition = (scrollPosition: number, stepSize: number, steps: number) => {
  return Math.min(steps, Math.round(scrollPosition / stepSize) + 1);
}

function ProductList(props: ProductListProps) {
  const { products } = props;
  const [ listPosition, setListPosition ] = useState(1);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const listElementWidth = target.children[0].clientWidth || 0;
    const newPosition = getScrollPosition(target.scrollLeft, listElementWidth, products.length);
    if (newPosition !== listPosition) {
      setListPosition(newPosition);
    }
  }

  const listItems = products.map(product => (
    <Flex extend={{ width: '75%', margin: '10px', scrollSnapAlign: 'start' }}>
      <ProductListItem product={product} />
    </Flex>
  ));

  return (
    <View>
      <Flex onScroll={handleScroll} extend={{ flexDirection: 'row', overflow: 'scroll', scrollSnapType: 'both mandatory' }} className="hidden-scroll">
        {listItems}
      </Flex>
      <PageIndicator totalPositions={products.length} currentPosition={listPosition} />
    </View>
  );
}

export default ProductList;
