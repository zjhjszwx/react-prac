import React, { useState } from 'react'
import PanziEditor from './index.js'
import { deserialize } from './serialize'


const initialValue = [
  {
    children: [
      {
        text:
          "By default, pasting content into a Slate editor will use the clipboard's ",
      },
      { text: "'text/plain'", code: true },
      {
        text:
          " data. That's okay for some use cases, but sometimes you want users to be able to paste in content and have it maintaing its formatting. To do this, your editor needs to handle ",
      },
      { text: "'text/html'", code: true },
      { text: ' data. ' },
    ],
  },
  {
    type: 'image',
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    children: [{ text: '' }],
  },
  {
    type: 'video',
    url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    children: [{ text: '' }],
  },
  {
    children: [{ text: 'This is an example of doing exactly that!' }],
  },
  {
    children: [
      {
        text:
          "Try it out for yourself! Copy and paste some rendered HTML rich text content (not the source code) from another site into this editor and it's formatting should be preserved.",
      },
    ],
  },
]

function Editor() {
  const [value, setValue] = useState(null)

  const handleValue = (e) => {
    console.log(e)
    setValue(e)
  }
  //<img src='https://source.unsplash.com/kFrdX5IeQzI'></img>
  let html = "<h1>1111</h1><h2>2222222222</h2><img src='https://source.unsplash.com/kFrdX5IeQzI'/><video src='https://media.w3.org/2010/05/sintel/trailer.mp4'></video></video><img src='https://source.unsplash.com/kFrdX5IeQzI'/>"
  const document = new DOMParser().parseFromString(html, 'text/html')
  const data = deserialize(document.body);
  console.log(data)
  data && data.forEach(i => {
    if (i.type === 'image' || i.type === 'video') {
      i.children = [{ text: '' }]
    }
  })

  return <PanziEditor
    editorChange={handleValue}
    initialValue={data}
    uploadUrl="api/uploadFile"
  />

}

export default Editor
