import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import {useDoc} from '@docusaurus/theme-common/internal';
import ReferenceList from '../../components/ReferenceList.js';

export default function MDXContentWrapper(props) {
    const {frontMatter} = useDoc();
    const {reference} = frontMatter;

    return (
        <>
            <MDXContent {...props} />
            {reference ? <ReferenceList reference={reference} /> : null}
        </>
    );
}
