import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

/**
 * ページの末尾に挿入する関連する情報へのリンクコンポーネント
 * @param reference
 * @returns {JSX.Element}
 * @constructor
 */
export default function ReferenceList({see_also}) {
    const seeAlsoLinkList = [];

    for (const [index, seeAlsoLinkItem] of see_also.entries()) {
        seeAlsoLinkList.push(<li key={index}><Link to={seeAlsoLinkItem}>{seeAlsoLinkItem}</Link></li>);
    }

    return (
        <>
            <Heading as={'h2'} id={'see_also'}>関連情報</Heading>
            <ul>
                {seeAlsoLinkList}
            </ul>
        </>
    );
}
