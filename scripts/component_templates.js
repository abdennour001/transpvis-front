exports.component = name => `import React from 'react';

import './_${name.toLocaleLowerCase()}.scss';

const ${name} = () => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};

export default ${name};
`;

// index.ts
exports.barrel = name => `import ${name} from './${name}';

export default ${name};
`;
