import { NnInputColor } from 'tpe2/elements/nn-input-color-class'
import { Shared } from '../mixins/shared.js'
import { tpeRegistry } from 'tpe2/lib/tpeRegistry'
import { css } from 'lit'

export class NnInputColorMaterial extends Shared(NnInputColor) {
  static get styles () {
    return [
      super.styles,
      super.stylePatterns.hoverStyle,
      super.stylePatterns.focusStyle,
      css`
      :host {
          position: relative;
          padding: 0 12px;
          padding-bottom: 16px;
          margin: 10px;
        }
        
        #native {
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          box-sizing: border-box;
          display: block;
          border-radius: var(--mat-input-border-radius, 4px 4px 0 0);
          border-width: 0;
          border-style: none;
          border-color: transparent;
          background-color: var(--mat-background, #eee);
          padding: 6px;
          height: 40px;
          box-shadow: var(--mat-theme-box-shadow);
          transition: background-color 0.3s ease-in-out,
                      color 0.3s ease-in-out,
                      box-shadow 0.3s ease-in-out;
        }
        `
      ]
    }
}


tpeRegistry.register('nn-input-color', NnInputColorMaterial)