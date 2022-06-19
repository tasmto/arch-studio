import React from 'react';
import { Helmet } from 'react-helmet';
import { site_title } from '../../constants/GlobalConstants';

type Props = {
  title?: string;
  description?: string;
};

const Meta = ({
  title = site_title,
  description = 'An architecture firm with 10 years experience, in creating all kinds of projects; from stations to high-rise buildings, we create spaces that inspire and delight.',
}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

export default Meta;
