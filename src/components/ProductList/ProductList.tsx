import React, { useState, useEffect, useRef } from 'react';
import { Flex, View, useTheme } from 'vcc-ui';

import { Product } from '../../types/product';
import PageIndicator from '../Toolkit/ListPositionIndicator/ListPositionIndicator';
import ProductListItem from './ProductListItem';
import { useIsMobile } from '../../hooks';
import ChevronButton from '../Toolkit/ChevronButton/ChevronButton';

interface ProductListProps {
  products: Product[],
}

const getListElementWidth = (listRef: React.RefObject<HTMLDivElement>) => {
  return listRef?.current?.children[0]?.clientWidth || 0;
};

const getListPosition = (scrollPosition: number, stepSize: number, steps: number) => {
  return Math.min(steps, Math.round(scrollPosition / stepSize) + 1);
}

function ProductList(props: ProductListProps) {
  const { products } = props;
  const [ listPosition, setListPosition ] = useState(1);
  const [ listTranslateFactor, setlistTranslateFactor ] = useState(0);
  const theme = useTheme();
  const isMobile = useIsMobile();
  const productListRef = useRef<HTMLDivElement>(null);
  const minListPosition = 1;
  const maxListPosition = products.length - 3;

  const setDesktopPositions = (increment: number) => {
    const listElementWidth = getListElementWidth(productListRef);
    setListPosition(Math.max(minListPosition, Math.min(maxListPosition, listPosition + increment)));
    setlistTranslateFactor(listElementWidth);
  }

  const handleResize = () => {
    setListPosition(1);
    productListRef?.current?.scrollTo(0, 0);
    setlistTranslateFactor(0);
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const listElementWidth = getListElementWidth(productListRef);
    const newPosition = getListPosition(target.scrollLeft, listElementWidth, products.length);
    if (newPosition !== listPosition) {
      setListPosition(newPosition);
    }
  }

  const handleChevronClick = (increment: number) => {
    setDesktopPositions(increment);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const listItems = products.map(product => (
    <Flex extend={{
      width: '75%', 
      padding: '10px', 
      scrollSnapAlign: 'start',
      [theme.breakpoints.fromXL]: {
        width: 'calc(25% - 20px)',
        transform: `translateX(${-(listPosition - 1) * listTranslateFactor}px)`,
        transition: 'all 1s ease',
      },
    }}>
      <ProductListItem product={product} />
    </Flex>
  ));

  return (
    <View>
      <Flex ref={productListRef} onScroll={handleScroll} className="hidden-scroll" extend={{
        flexDirection: 'row',
        overflow: 'scroll',
        scrollSnapType: 'both mandatory',
        [theme.breakpoints.fromXL]: {
          scrollSnapType: 'unset',
          overflow: 'auto',
        }
      }}>
        {listItems}
      </Flex>
      {isMobile ?
        <PageIndicator totalPositions={products.length} currentPosition={listPosition} />
        :
        <Flex extend={{ flexDirection: 'row', marginLeft: 'auto', marginRight: '5px' }}>
          <ChevronButton disabled={listPosition <= minListPosition} onClick={() => handleChevronClick(-4)} direction="left" />
          <ChevronButton disabled={listPosition >= maxListPosition} onClick={() => handleChevronClick(4)} direction="right" />
        </Flex>
      }
    </View>
  );
}

export default ProductList;
