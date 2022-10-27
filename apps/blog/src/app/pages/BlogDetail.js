import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';

const BlogDetail = () => {
  const id = useParams();

  console.log(id);

  return (
    <div>
      <Header />
      <h1>Blog Detail</h1>
    </div>
  );
};

export default BlogDetail;
