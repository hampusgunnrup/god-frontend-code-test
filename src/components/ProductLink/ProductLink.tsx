import React, { ReactChild } from 'react';
import { Link, Block } from 'vcc-ui';

interface ProductLinkProps {
  url: string,
  children: ReactChild,
}

function ProductLink(props: ProductLinkProps) { 
  const { url, children } = props;
  return (
    <Block extend={{ margin: '0.4rem 0.7rem' }}>
      <Link href={url} arrow="right">{children}</Link>
    </Block>
  );
}

export default ProductLink;
