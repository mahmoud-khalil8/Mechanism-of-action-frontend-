import React from 'react';
import getPostMetaData from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Header from '../../../components/Header';

function Research() {
  const postMetaData = getPostMetaData();
  // Take only the first six slugs
  const firstThreeSlugs = postMetaData.slice(0, 6);

  const postPreviews = firstThreeSlugs.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <Header />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 lg:p-8">
        {postPreviews}
      </div>
    </div>
  );
}

export default Research;
