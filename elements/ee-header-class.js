import { EeHeader } from 'tpe2/elements/ee-header-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe2/lib/tpeRegistry'
import { css } from 'lit'

export class EeHeaderMaterial extends Shared(EeHeader) {
  static get styles () {
    return [
      super.styles,
      css`
      `
    ]
  }
}

tpeRegistry.register('ee-header', EeHeaderMaterial)
