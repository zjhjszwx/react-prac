import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import imageExtensions from 'image-extensions'
import {
  Editable,
  withReact,
  useSlate,
  Slate,
  useEditor,
  useSelected,
  useFocused,
} from 'slate-react'
import { Editor, Transforms, createEditor } from 'slate'
import { withHistory } from 'slate-history'

import { Button, Icon, Toolbar } from './components.js'
import { serialize, deserialize } from './serialize.js'
import isUrl from 'is-url'
import { css } from '@emotion/css'
import { Upload } from 'antd'
import './index.css'
const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const RichTextExample = ({ editorChange, initialValue, uploadUrl }) => {
  const [value, setValue] = useState(initialValue)

  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
  const editor = useMemo(
    () => withEmbeds(withImages(withHistory(withReact(createEditor())))),
    [],
  )
  const handleChange = (value) => {
    setValue(value)
    editorChange(serialize(editor))
  }

  return (
    <div className={css`
      margin: 0 auto;
      max-height: 700px;
      width: 650px;
    ` } className="rich-text">
      <Slate className="slate" editor={editor} value={value} onChange={handleChange}>
        <Toolbar className="tool-bar">
          {/* <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="code" icon="iconcode" /> */}
          <BlockButton format="heading-one" icon="looks_one" />
          <BlockButton format="heading-two" icon="looks_two" />
          <BlockButton format="heading-three" icon="looks_three" />
          <BlockButton format="heading-four" icon="looks_four" />
          <BlockButton format="heading-five" icon="looks_five" />

          {/* <BlockButton format="block-quote" icon="format_quote" /> */}
          {/* <BlockButton format="numbered-list" icon="format_list_numbered" /> */}
          {/* <BlockButton format="bulleted-list" icon="format_list_bulleted" /> */}
          <InsertImageButton uploadUrl={uploadUrl} />
          <InsertVideoButton uploadUrl={uploadUrl} />
        </Toolbar>
        <Editable
          className="editor"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
    </div>
  )
}

const withImages = (editor) => {
  const { insertData, isVoid } = editor

  editor.isVoid = (element) => {
    return element.type === 'image' ? true : isVoid(element)
  }

  editor.insertData = (data) => {
    const text = data.getData('text/plain')
    const { files } = data

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result
            insertImage(editor, url)
          })

          reader.readAsDataURL(file)
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}
const insertImage = (editor, url) => {
  const text = { text: '' }
  const image = { type: 'image', url, children: [text] }
  Transforms.insertNodes(editor, image)
}

const ImageElement = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
          `}
        />
      </div>
      {children}
    </div>
  )
}

const InsertImageButton = ({ uploadUrl }) => {
  const editor = useEditor()
  const imgProps = {
    name: 'file',
    action: uploadUrl,
    accept: '.svg, .png, .bmp, .jpg, .jpeg, .gif, .tif, .tiff, .emf, .webp',
    showUploadList: false,
    onChange(info) {
      if (info.file.status === 'done') {
        if (info.file.response) {
          insertImage(editor, info.file.response.result)
        }
      }
    },
  }
  return (
    <Upload {...imgProps}>
      <Button
        className={css`
          z-index: 2;
        `}
        onMouseDown={(event) => {
        }}
      >
        <Icon>image</Icon>
      </Button>
    </Upload>
  )
}


const isImageUrl = (url) => {
  if (!url) return false
  if (!isUrl(url)) return false
  const ext = new URL(url).pathname.split('.').pop()
  return imageExtensions.includes(ext)
}


const InsertVideoButton = ({ uploadUrl }) => {
  const editor = useEditor()

  const videoProps = {
    name: 'file',
    action: uploadUrl,
    accept: '.AVI, .mov, .rmvb, .rm, .FLV, .mp4, .3GP',
    showUploadList: false,
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        if (info.file.response) {
          let url = info.file.response.result
          const text = { text: '' }
          const video = { type: 'video', url, children: [text] }
          Transforms.insertNodes(editor, video)
        }
      }
    },
  }
  return (
    <Upload {...videoProps}>
      <Button
        onMouseDown={(event) => {
        }}
      >
        <Icon>video_library</Icon>
      </Button>
    </Upload>
  )
}
const withEmbeds = (editor) => {
  const { isVoid } = editor
  editor.isVoid = (element) =>
    element.type === 'video' ? true : isVoid(element)
  return editor
}

const VideoElement = ({ attributes, children, element }) => {
  const editor = useEditor()
  const { url } = element
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <div
          style={{
            position: 'relative',
          }}
        >
          <video
            preload="true"
            data-src={url}
            controls
            data-loaded="true"
            className={css`
              width: 100%;
              max-height: 450px;
            `}
          >
            <source src={url} type="video/mp4" />
          </video>
        </div>
      </div>
      {children}
    </div>
  )
}

const UrlInput = ({ url, onChange }) => {
  const [value, setValue] = React.useState(url)
  return (
    <input
      value={value}
      onClick={(e) => e.stopPropagation()}
      style={{
        marginTop: '5px',
        boxSizing: 'border-box',
      }}
      onChange={(e) => {
        const newUrl = e.target.value
        setValue(newUrl)
        onChange(newUrl)
      }}
    />
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = (props) => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'video':
      return <VideoElement {...props} />
    case 'image':
      return <ImageElement {...props} >{children}</ImageElement>
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>
    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>
    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>

    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}


export default RichTextExample
