/**
 * Common code to make it all alive
 */

import 'css/index.css'

import View from 'classes/View'
import Model from 'classes/Model'
import Presenter from 'classes/Presenter'
import NavigationDrawer from 'classes/ui/NavigationDrawer'

class App {

  constructor () {
    const size = document.getElementById('fieldSize').value
    const gemTypesCount = document.getElementById('gemTypesCount').value
    const respectGravity = document.getElementById('respectGravity').checked

    const model = new Model({ width: size, height: size }, gemTypesCount)
    const view = new View('app')
    this.presenter = new Presenter(model, view)
    this.presenter.respectGravity = respectGravity

    this.navDrawer = new NavigationDrawer('nav-drawer-btn', 'nav-drawer-menu')

    document.getElementById('refillButton').addEventListener('click', event => {
      this.presenter.refillEmptyCells()
    })

    document.getElementById('undoButton').addEventListener('click', event => {
      this.presenter.undoMove()
    })

    document.addEventListener('keypress', event => {
      if (event.ctrlKey && event.keyCode === 26) this.presenter.undoLastMove()
    })
  }

  run () {
    this.presenter.run()
  }

}

export default App
