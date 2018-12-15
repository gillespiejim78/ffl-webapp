import React from 'react';

import { storiesOf } from '@storybook/react';
import FflAppBlog from '../FflAppBlog';

storiesOf('FflAppBlog', module)
    .add('first test', () => (
    <FflAppBlog></FflAppBlog>
    ));