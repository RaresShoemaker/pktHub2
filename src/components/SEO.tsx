import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  imgSrc?: string;
  url?: string;
  siteName?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Packet Hub',
  description = 'PKT Network is a fully decentralized media network. Anyone can distribute media content with global accessibility, censorship-resistance and built-in payments.',
  keywords = 'Packet Hub, content platforms',
  url = 'https://hub.pkt.tv/',
  imgSrc,
  siteName = 'Packet Hub'
}) => {
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {imgSrc && <meta property="og:image" content={imgSrc} />}
      {imgSrc && <meta property="og:image:width" content="1200" />}
      {imgSrc && <meta property="og:image:height" content="630" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imgSrc && <meta name="twitter:image" content={imgSrc} />}
    </Helmet>
  );
};

export default SEO;