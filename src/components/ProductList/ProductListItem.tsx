import React from 'react';
import {
  useTheme,
  Text,
  Spacer,
  Flex,
  View,
} from 'vcc-ui';

import { Product } from '../../types/product';
import ProductLink from '../ProductLink/ProductLink';

interface ProductListItemProps {
  product: Product,
}

function ProductListItem(props: ProductListItemProps) {
  const { product } = props;
  const theme = useTheme();
  const learnUrl = `/learn/${product.id}`;
  const shopUrl = `/shop/${product.id}`;

  return (
    <View>
        <Text
          subStyle="emphasis"
          foreground={theme.color.foreground.secondary}
          extend={{ textTransform: 'uppercase' }}
        >
          {product.type}
        </Text>
        <Text
          variant="hillary"
          subStyle="emphasis"
        >
          {product.name}
        </Text>
        <Text
          variant="hillary"
          foreground={theme.color.foreground.secondary}
        >
          {product.subType}
        </Text>
        <img src={product.imageUrl} alt={product.name} />
        <Spacer />
        <Flex extend={{ flexDirection: 'row', justifyContent: 'center' }}>
          <ProductLink url={learnUrl}>Learn</ProductLink>
          <ProductLink url={shopUrl}>Shop</ProductLink>
        </Flex>
      </View>
  );
}

export default ProductListItem;
