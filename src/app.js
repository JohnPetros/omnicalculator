import "./styles/main.scss"

import { Navigation } from './utils/navigation'
import { BmiCalculatorPage, BmiCalculatorView } from "./pages/bmi-calculator/page"
import { AgeGroupCalculatorPage, AgeGroupCalculatorView } from "./pages/age-group-calculator/page"
import { AverageCalculatorPage, AverageCalculatorView } from "./pages/average-calculator/page"
import { ShippingCalculatorPage, ShippingCalculatorView } from "./pages/shipping-calculator/page"
import { PayrollCalculatorPage, PayrollCalculatorView } from "./pages/payroll-calculator/page"

const navigation = new Navigation({
  '/': {
    page: BmiCalculatorPage,
    view: BmiCalculatorView,
  },
  '/bmi-calculator': {
    page: BmiCalculatorPage,
    view: BmiCalculatorView,
  },
  '/average-calculator': {
    page: AverageCalculatorPage,
    view: AverageCalculatorView,
  },
  '/age-group-calculator': {
    page: AgeGroupCalculatorPage,
    view: AgeGroupCalculatorView,
  },
  '/shipping-calculator': {
    page: ShippingCalculatorPage,
    view: ShippingCalculatorView,
  },
  '/payroll-calculator': {
    page: PayrollCalculatorPage,
    view: PayrollCalculatorView,
  },
})


document.addEventListener('navigate', () => {
  navigation.handleNavigate()
})

navigation.navigate(window.location.pathname)
navigation.handleNavigate()