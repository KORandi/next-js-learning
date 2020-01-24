// @flow
import React from 'react';
import Link from 'next/link';

type LinkListProps = {
  list: Array<{ name: string, href: string }>
}

const LinkList = ({list}: LinkListProps) => (
  list.map(({name, href}, index: number) =>
    (
      <li key={index}>
        <Link href={'/p/[id]'} as={href}>
          <a>{name}</a>
        </Link>
      </li>
    ),
  )
);

const Index = () => {
  const listOfLinks: Array<{ name: string, href: string }> = [
    {
      'name': 'Homepage',
      'href': '/',
    },
    {
      'name': 'Some other link',
      'href': '/p/herro',
    },
  ];
  return (
    <div>
      <p>Links:</p>
      <ul>
        {
          <LinkList list={listOfLinks}/>
        }
      </ul>
    </div>
  );
};

export default Index;
