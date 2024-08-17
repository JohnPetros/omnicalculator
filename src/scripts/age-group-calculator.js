class AgeGroupCalculator {
  constructor() {
    this.form = new Form("age-group-calculator")
    const startButton = document.querySelector("[data-age-group-calculator='start-button']")
    const retartButton = document.querySelector("[data-age-group-calculator='restart-button']")
    const calculateButton = document.querySelector("[data-age-group-calculator='calculate-button']")
    if (!startButton || !calculateButton || !calculateButton) return

    startButton.addEventListener(
      'click', (event) => this.handleStartButtonClick(event.currentTarget)
    )
    retartButton.addEventListener(
      'click', () => this.handleRestartButtonClick()
    )
    this.form.onSubmit = () => this.handleFormSubmit()
  }

  getGroup(age) {
    const ageRanges = [
      { start: 0, end: 14, group: 'criança' },
      { start: 15, end: 29, group: 'jovem' },
      { start: 30, end: 60, group: 'adulto' },
    ]

    for (const range of ageRanges) {
      if (age >= range.start && age <= range.end) {
        return range.group
      }
    }

    return "idoso"
  }

  hidePlaceholder() {
    const displayElement = document.querySelector("[data-age-group-calculator='placeholder']")
    if (!displayElement) return
    displayElement.classList.add('hidden')
  }

  showDisplay() {
    const displayElement = document.querySelector("[data-age-group-calculator='display']")
    if (!displayElement) return
    if (displayElement) displayElement.classList.remove('hidden')
  }

  renderResult(username, age) {
    const group = this.getGroup(age)

    this.hidePlaceholder()
    this.showDisplay()

    const messageElement = document.querySelector("[data-age-group-calculator='message']")
    const groupElement = document.querySelector("[data-age-group-calculator='group']")

    messageElement.textContent =
      `${username}, você tem ${age} anos e é classificado como:`
    groupElement.textContent = group.toUpperCase()
  }

  handleFormSubmit() {
    const usernameField = this.form.getField("username")
    const ageField = this.form.getField("age")
    if (!ageField || !usernameField) return

    if (Number(ageField.value) < 0) {
      this.form.showInputError(ageField, "Idade não pode ser valor negativo")
      return
    }

    this.renderResult(usernameField.value, ageField.value)
    this.form.clearField("age")
    this.form.focusField("age")
  }

  handleRestartButtonClick() {
    location.reload()
  }

  handleStartButtonClick(button) {
    button.parentElement.remove()
    this.form.showForm()
  }
}

new AgeGroupCalculator()