import React from 'react'
import './style.scss'

export default function Button({ fill, outlined, color, children }) {

    switch (true) {
        case fill:
            return <button className="button-fill" style={{ color: color || 'initial' }}>{children}</button>

        case outlined:
            return <button className="button-outlined" style={{ color: color || 'initial' }}>{children}</button>

        default: return <button className="button-fill" style={{ color: color || 'initial' }}>{children}</button>
    }
}
