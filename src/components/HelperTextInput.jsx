import React from 'react';

function HelperTextInput({ register, name, label, ...props }) {
    return (
        <div className="space-y-1">
            <label className="text-sm text-white">{label}</label>
            <input
                {...register(name)}
                type="text"
                className="mt-1 p-1 w-full rounded-md text-gray-700 text-sm"
                onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                }}
                {...props} 
            />
        </div>
    );
}

export default HelperTextInput;
