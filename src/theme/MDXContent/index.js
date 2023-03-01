import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import {useDoc} from '@docusaurus/theme-common/internal';
import ReferenceList from '../../components/ReferenceList.js';
import SeeAlsoList from '../../components/SeeAlsoList.js';

export default function MDXContentWrapper(props) {
    const {frontMatter} = useDoc();
    const {reference, see_also} = frontMatter;

    return (
        <>
            <MDXContent {...props} />
            {reference ? <ReferenceList reference={reference} /> : null}
            {see_also ? <SeeAlsoList see_also={see_also} /> : null}
        </>
    );
}
