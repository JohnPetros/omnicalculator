export class Navigation {
  constructor(routes) {
    this.routes = routes;
  }

  navigate(path) {
    const route = this.routes[path] ?? this.routes['/not-found']

    document.body.innerHTML = route.page

    setTimeout(() => {
      new route.view()
    }, 500)
  }

  handleNavigate() {
    setTimeout(() => {
      const links = document.querySelectorAll("[data-navigation='link']")
      if (!links.length) return

      for (const link of links) {
        link.addEventListener('click', (event) => this.handleLinkClick(event))
      }
    }, 1000)
  }

  handleLinkClick(event) {
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)

    const routeName = event.target.href.split('/').at(-1)
    this.navigate(`/${routeName}`)

    const customLoadEvent = new Event('navigate')
    document.dispatchEvent(customLoadEvent)
  }
}