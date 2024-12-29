
const categories = [
    { value: "nails", label: "Nails", icon: "💅" },
    { value: "hair&styling", label: "Hair & Styling", icon: "🪮" },
    { value: "eyebrows&eyelashes", label: "Eyebrows & eyelashes", icon: "👁️" },
    { value: "massage", label: "Massage", icon: "💆" },
    { value: "barbering", label: "Barbering", icon: "💈" },
    { value: "hairRemoval", label: "Hair Removal", icon: "😶‍🌫️" },
    { value: "makeup", label: "Makeup", icon: "💄" },
]

export default function Category() {


    return (
        <>
            {categories.map((category) =>
            (
                <div key={category.value} className="flex items-center gap-2">
                    {category.icon && (<span className="size-6">{category.icon}</span>)}
                    <p>{category.label}</p>
                </div>
            )
            )}

        </>
    )
};

export { categories };