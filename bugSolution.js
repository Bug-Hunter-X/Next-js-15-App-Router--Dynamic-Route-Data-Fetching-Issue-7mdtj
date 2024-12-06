```javascript
// pages/index.js

import { Suspense } from 'react';

export default async function Home() {
  const response = await fetch('/api/hello');
  const data = await response.json();

  return (
    <div>Hello {data.message}</div>
  );
}
```
```javascript
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: 'world' });
}
```