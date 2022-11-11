export const filters = [
    {
        title: "all",
        function: (data) => { return [...data] }
    },
    {
        title: "id (1)",
        function: (data, criterium) => { return [...data.filter(item => item.id === criterium)] }
    }
]

export const filters2 = [
    {
        title: "id (1)",
        function: (data, criterium) => {
            return criterium.length !== 0
                ? [...data.filter(item => item.userId.toString() === criterium)]
                : [...data]
        },
        component: (onAction) => <input type="text" onChange={onAction}></input>,
    },
]