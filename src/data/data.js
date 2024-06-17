let question_list = [
    {
        image_path: `${process.env.PUBLIC_URL}/images/task_1/task.png`,
        questions: [
            {   
                question_id: 1,
                text: "Формула нахождения площади:",
                answers: [
                    `${process.env.PUBLIC_URL}/images/task_1/1.png`, 
                ]
            },
            {
                question_id: 2,
                text: "Формула нахождения угла А:",
                answers: [
                    `${process.env.PUBLIC_URL}/images/task_1/2.png`,
                    `${process.env.PUBLIC_URL}/images/task_1/3.png`,
                ]
            },
            {
                question_id: 3,
                text: "Формула нахождения периметра:",
                answers: [
                    `${process.env.PUBLIC_URL}/images/task_1/4.png`,
                    `${process.env.PUBLIC_URL}/images/task_1/5.png`,
                    `${process.env.PUBLIC_URL}/images/task_1/6.png`
                ]
            },
        ]
    },
]

export default question_list;