const InputValidation = ({
    labelText,
    value,
    placeholder,
    name,
    className,
    type,
    onChange,
    onBlur,
    errors,
    regex,
    condition
}) => {
    return (
        <>
            <label className='form-label'>{labelText}</label>
            <input
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={() => onBlur(name, value, regex, condition)}
            />
            {errors && errors[name] && <p className="error">{errors[name]}</p>}
        </>
    )
}

export default InputValidation
