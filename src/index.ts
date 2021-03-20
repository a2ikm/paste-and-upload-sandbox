const uploadImage = (file: File): string => {
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
