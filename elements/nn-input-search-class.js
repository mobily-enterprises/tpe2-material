import { NnInputSearch } from 'tpe/elements/nn-input-search-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputSearchMaterial extends Shared(NnInputSearch) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('nn-input-search', NnInputSearchMaterial)
