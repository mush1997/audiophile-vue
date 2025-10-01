export function useFormValidation() {
  function checkEmpty(inputValue) {
    return inputValue === "" ? true : false
  }

  function checkFormat(nameAttr, inputValue) {
    if (inputValue === "") { return false }

    const regexStr = /^[a-zA-Z]+([a-zA-Z-\s]{0,})+[a-zA-Z]$/
    const regexEmail = /^([a-zA-Z0-9]{1,})+[a-zA-Z0-9._-]+@([a-zA-Z0-9]{1,})+([a-zA-Z0-9.-]{0,})+(\.[a-zA-Z]{2,})$/
    const regexPhoneNumber = /^[0-9]{7,}$/
    const regexAddress = /^[a-zA-Z0-9]+([a-zA-Z0-9-\s]{0,})+[a-zA-Z0-9]$/
    const regexZIPcode = /^[0-9]{3,}$/
    const regexCardNumber = /^[0-9\s]{19}$/
    const regexCVC = /^[0-9]{3}$/

    if (nameAttr === "name" || nameAttr === "city" || nameAttr === "country") {
      return regexStr.test(inputValue)
    } else if (nameAttr === "email") {
      return regexEmail.test(inputValue)
    } else if (nameAttr === "phoneNumber") {
      return regexPhoneNumber.test(inputValue)
    } else if (nameAttr === "address") {
      return regexAddress.test(inputValue)
    } else if (nameAttr === "ZIPcode") {
      return regexZIPcode.test(inputValue)
    } else if (nameAttr === "cardNumber") {
      return regexCardNumber.test(inputValue)
    } else if (nameAttr === "CVC") {
      return regexCVC.test(inputValue)
    }
  }

  function formatCardNumber(inputValue) {
    const plainText = inputValue.trim().replaceAll(" ", "")
    let formattedValue = ""

    for (let i = 0; i < plainText.length; i++) {
      if (i > 0 && i % 4 === 0) { formattedValue += " " }
      formattedValue += plainText[i]
    }

    inputValue = formattedValue
    return inputValue
  }

  function checkInputValue(inputValue, field, nameAttr) {
    field.empty = checkEmpty(inputValue)
    field.invalid = !checkFormat(nameAttr, inputValue)
  }

  return { formatCardNumber, checkInputValue }
}