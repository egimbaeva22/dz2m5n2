import React from "react"

const NumberInput = ({ name, value, onChange }) => (
    <input
        type="number"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
    />
)

export default NumberInput
