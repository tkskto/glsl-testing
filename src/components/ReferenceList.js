import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

/**
 * ページの末尾に挿入するリファレンスへのリンクコンポーネント
 * @param reference
 * @returns {JSX.Element}
 * @constructor
 */
export default function ReferenceList({reference}) {
    const referenceURLList = [];

    for (const [index, referenceItem] of reference.entries()) {
        referenceURLList.push(<li key={index}><Link to={referenceItem}>{referenceItem}</Link></li>);
    }

    return (
        <>
            <Heading as={'h2'} id={'reference'}>リファレンス</Heading>
            <ul>
                {referenceURLList}
            </ul>
        </>
    );
}
