const uploadImage = (file: File) => {
  console.log(file)
}

const main = () => {
  const textarea = document.getElementById('editor') as HTMLTextAreaElement
  textarea.onpaste = (event) => {
    const item = event.clipboardData.items[0]

    if (item.kind == 'string') {
      return
    }

    if (item.type.startsWith('image/')) {
      uploadImage(item.getAsFile())
    }

    event.preventDefault
  }
}

main()
