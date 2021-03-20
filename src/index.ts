const uploadImage = (file: File): string => {
  const form = new FormData()
  form.append('file', file)
  fetch('http://localhost:4567/upload', {
    method: 'POST',
    mode: 'no-cors',
    body: form,
  }).then(response => console.log(response)).catch(error => console.log(error))

  return file.name
}

const main = () => {
  const textarea = document.getElementById('editor') as HTMLTextAreaElement
  textarea.onpaste = (event) => {
    const item = event.clipboardData.items[0]
    const selectionStart = textarea.selectionStart
    const selectionEnd = textarea.selectionEnd

    if (item.kind == 'string') {
      return
    }

    let replacement: string;
    if (item.type.startsWith('image/')) {
      replacement = uploadImage(item.getAsFile())
    }

    textarea.setRangeText(replacement, selectionStart, selectionEnd)

    event.preventDefault
  }
}

main()
