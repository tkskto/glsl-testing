import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import ReferenceList from '../../components/ReferenceList.js';
import SeeAlsoList from '../../components/SeeAlsoList.js';

export default function MDXContentWrapper(props) {
    let reference;
    let see_also;

    // Some MDX pages (e.g. non-doc pages) are not wrapped by DocProvider.
    // Guard `useDoc()` so SSR does not fail on those pages.
    try {
        const {frontMatter} = useDoc();
        reference = frontMatter?.reference;
        see_also = frontMatter?.see_also;
    } catch (e) {
        // Not in docs context; skip extra sections.
    }

    return (
        <>
            <MDXContent {...props} />
            {reference ? <ReferenceList reference={reference} /> : null}
            {see_also ? <SeeAlsoList see_also={see_also} /> : null}
        </>
    );
}
