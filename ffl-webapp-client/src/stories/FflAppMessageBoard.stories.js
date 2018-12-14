import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import FflAppMessageBoard from '../FflAppMessageBoard';
import fetchMock from 'fetch-mock';

const payload = {
    group: {},
    messages: [
        {
            text: 'Hello there',
            userName: 'Wade'
        },
        {
            text: 'Hey, Wade!',
            userName: 'Ol'
        }
    ]
}

storiesOf('FflAppMessageBoard',module).add('first test', () => {
    fetchMock.restore().getOnce(
        '/api/messages',
        payload
    )
    return (<FflAppMessageBoard/>)
})
.add('second test', () => {
    fetchMock.restore().getOnce(
        '/api/messages',
        payload
    )
    return (<FflAppMessageBoard/>)
})