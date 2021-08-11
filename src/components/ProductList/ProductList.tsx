import React from 'react';
import { Flex, View } from 'vcc-ui';

import { Product } from '../../types/product';
import ProductListItem from './ProductListItem';

interface ProductListProps {
  products: Product[],
}

function ProductList(props: ProductListProps) {
  const listItems = props.products.map(product => (
    <Flex extend={{ width: '75%', margin: '10px' }}>
      <ProductListItem product={product} />
    </Flex>
  ));

  return (
    <View>
      <Flex extend={{ flexDirection: 'row', overflow: 'hidden' }}>
        {listItems}
      </Flex>
    </View>
  );
}

export default ProductList;
