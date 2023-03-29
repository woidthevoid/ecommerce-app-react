import React from 'react';
import SanityClientConstructor from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClientConstructor({
    projectId: 'zvdr58de',
    dataset: 'production',
    apiVersion: '2023-03-26',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);