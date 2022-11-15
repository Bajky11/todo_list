export const filters = [
    {
        title: "Active",
        function: (data) => { return [...data.filter(item => item.completed === false)] }
    },
    {
        title: "Completed",
        function: (data) => { return [...data.filter(item => item.completed === true)] }
    }
]

export const filters2 = [
    {
        title: "id (1)",
        function: (data, criterium) => {
            return criterium.length !== 0
                ? [...data.filter(item => item.id.toString() === criterium)]
                : [...data]
        },
        component: (onAction) => <p>User id: <input type="text" onChange={onAction}></input></p>,
    },
]