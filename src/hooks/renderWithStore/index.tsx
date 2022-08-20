import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'

import { reducers, RootState } from '../../store/store'
import { ReactElement } from 'react'

const testStore = (state: Partial<RootState>) => {
    return configureStore({
        reducer: reducers,
        preloadedState: state
    })
}

export const renderWithStore = (component: any, initialState: any) => {
    const Wrapper = ({ children }: { children: ReactElement }) => (
        <Provider store={testStore(initialState)}>{children}</Provider>
    )
    return render(component, { wrapper: Wrapper })
}