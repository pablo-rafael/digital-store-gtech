import { useState } from 'react'

export default function ProductOptions({ options = [], radius = '4px', shape = 'square', type = 'text' }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="product-options">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`option option--${shape} ${selected === opt ? 'option--selected' : ''}`}
          style={{
            borderRadius: shape === 'circle' ? '50%' : radius,
            background: type === 'color' ? opt : undefined,
          }}
          onClick={() => setSelected(opt)}
          aria-label={`Opção ${opt}`}
          aria-pressed={selected === opt}
        >
          {type === 'text' ? opt : null}
        </button>
      ))}
    </div>
  )
}
