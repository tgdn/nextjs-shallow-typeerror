import React from 'react';
import { useRouter } from 'next/router';

const Input = (props) => (
  <input {...props} />
);

export default () => {
  const router = useRouter();
  const { q = '' } = router.query;
  console.log(q)

  const onChange = (e) => {
    const url = encodeURI(`/?q=${e.target.value}`);
    router.push(url, null, { shallow: true });
  }

  return (
    <>
      <h1>Hello</h1>
      <Input defaultValue={q} onChange={onChange} />
    </>
  )
}
