/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {render} from '@testing-library/react'
import ModulesHomePage from '../ModulesHomePage'

describe('Modules Home Page', () => {
  const createButtonText = 'Create a new Module'
  const importExistingButtonText = 'Add existing content'

  it('renders the create and import button', () => {
    const {queryByText} = render(<ModulesHomePage />)
    expect(queryByText(createButtonText)).toBeInTheDocument()
    expect(queryByText(importExistingButtonText)).toBeInTheDocument()
  })

  describe('with the module_dnd FF enabled', () => {
    beforeEach(() => {
      window.ENV = {FEATURES: {module_dnd: true}}
    })

    afterEach(() => {
      window.ENV = {}
    })

    it('does not render the import button', () => {
      const {queryByText} = render(<ModulesHomePage />)
      expect(queryByText(createButtonText)).toBeInTheDocument()
      expect(queryByText(importExistingButtonText)).not.toBeInTheDocument()
    })
  })
})
