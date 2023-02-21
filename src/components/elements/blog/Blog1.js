import React from 'react';
import { faker } from '@faker-js/faker';
import BlogTemplate from './BlogTemplate';

function Blog1() {
  const title = faker.commerce.product();
  const body = faker.lorem.paragraph(faker.random.numeric());

  return (
    <div className="container">
      <div className="row">
        <BlogTemplate title={title} body={body} />
      </div>
    </div>
  )
}

export default Blog1;
