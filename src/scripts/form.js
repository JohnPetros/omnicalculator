class Form {
  #onSubmit
  #calculator

  constructor(calculator) {
    this.#calculator = calculator

    const form = document.querySelector(`[data-${this.#calculator}='form']`)
    if (!form) return

    this.form = form
    this.form.addEventListener("submit", (event) => this.handleFormSubmit(event))
  }

  clear() {
    this.form.reset()
  }

  clearField(fieldName) {
    const field = this.form.querySelector(`[data-${this.#calculator}='${fieldName}']`)
    if (field) field.value = ""
  }

  focusField(fieldName) {
    const field = this.form.querySelector(`[data-${this.#calculator}='${fieldName}']`)
    if (field) field.focus()
  }

  getField(fieldName) {
    const field = this.form.querySelector(`[data-${this.#calculator}='${fieldName}']`)
    return field ?? null
  }

  getFields(fieldName) {
    const fields = this.form.querySelectorAll(`[data-${this.#calculator}='${fieldName}']`)
    return fields
  }

  getCheckboxGroupValues(groupName) {
    const checkedCheckboxes = []

    const checkboxes = this.form.querySelectorAll(`[data-${this.#calculator}='${groupName}']`)
    for (const checkbox of checkboxes) {
      if (checkbox.checked) checkedCheckboxes.push(checkbox.value)
    }
    return checkedCheckboxes
  }

  getRadioGroupValue(groupName) {
    const radios = this.form.querySelectorAll(`[data-${this.#calculator}='${groupName}']`)
    for (const radio of radios) {
      if (radio.checked) return radio.value
    }
  }

  showForm() {
    this.form.classList.remove('hidden')
  }

  showInputError(inputField, errorMessage) {
    const error = document.createElement('p')
    error.classList.add('input__error')
    error.textContent = errorMessage
    inputField.parentElement.parentElement.append(error)
  }

  removeErrors() {
    const errors = this.form.querySelectorAll('.input__error')
    for (const error of errors) error.remove()
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.removeErrors()
    if (typeof this.#onSubmit === 'function') this.#onSubmit()
  }

  set onSubmit(onSubmit) {
    this.#onSubmit = onSubmit
  }
}