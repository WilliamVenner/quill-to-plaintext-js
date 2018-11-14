[![npm version](https://badge.fury.io/js/quill-to-plaintext.svg)](https://badge.fury.io/js/quill-to-plaintext)

# quill-to-plaintext

[PHP Version](https://github.com/WilliamVenner/quill-to-plaintext-php)

Converts a Quill Delta to plaintext. It will ignore any non-insert operations.

You can either supply the JSON for a Quill Delta, or a Quill Delta object itself.

# Installation

Using npm:

```bash
$ npm install quill-to-plaintext
```

# How to use

```javascript
const QuillToPlaintext = require('chat-arg-parser');

QuillToPlaintext('{"ops":[{"insert":"Fixed problem with core files."}]}');
// => Fixed problem with core files.

let quill_delta = JSON.parse('{"ops":[{"insert":"Fixed problem with core files."}]}'); // this is emulating creating an actual Quill Delta object
QuillToPlaintext(quill_delta);
// => Fixed problem with core files.
```
