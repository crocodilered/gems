/**
 * Common code to make it all alive
 */

import 'css/index.css'

import View from 'classes/View'
import Model from 'classes/Model'
import Presenter from 'classes/Presenter'

class App {

  constructor () {
    const size = document.getElementById('fieldSize').value
    const gemTypesCount = document.getElementById('gemTypesCount').value
    

    const model = new Model({ width: size, height: size }, gemTypesCount)
    const view = new View('app')
    this.presenter = new Presenter(model, view)

    const refillButton = document.getElementById('refillButton')
    refillButton.addEventListener('click', event => this.presenter.refillEmptyCells())
  }

  run () {
    this.presenter.run()
  }

}

export default App
