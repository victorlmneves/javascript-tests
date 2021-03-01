function alphanumeric(string){
  if (string.match("^[a-zA-Z0-9]*$") && string.length > 0) {
    return true
  }

  return false
}

let alphanumeric = s => /^[a-z\d]+$/i.test(s)