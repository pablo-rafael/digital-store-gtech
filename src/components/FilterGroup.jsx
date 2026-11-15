// Filtrar
export default function FilterGroup({ title, inputType = 'checkbox', options = [], name, selected, onChange }) {
  const controlled = Array.isArray(selected)
  const groupName = name ?? title

  return (
    <div className="filter-group">
      <h4>{title}</h4>
      {options.map((opt) => {
        const value = opt.value ?? opt.text
        return (
          <label key={opt.text} className="filter-group__option">
            <input
              type={inputType}
              name={groupName}
              value={value}
              onChange={() => onChange?.(value)}
              {...(controlled ? { checked: selected.includes(value) } : {})}
            />
            <span>{opt.text}</span>
          </label>
        )
      })}
    </div>
  )
}
